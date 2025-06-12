package com.example.spring_auth_service.service.impl;

import com.example.spring_auth_service.config.JwtConfig;
import com.example.spring_auth_service.exception.VerificationTokenExpiredException;
import com.example.spring_auth_service.exception.InvalidRefreshTokenException;
import com.example.spring_auth_service.exception.RefreshTokenMissingException;
import com.example.spring_auth_service.mapper.UserMapper;
import com.example.spring_auth_service.model.dto.request.LoginRequest;
import com.example.spring_auth_service.model.dto.request.ResetPasswordRequest;
import com.example.spring_auth_service.model.dto.request.UserRegistrationRequest;
import com.example.spring_auth_service.model.dto.response.LoginResponse;
import com.example.spring_auth_service.model.dto.response.RegisteredUserResponse;
import com.example.spring_auth_service.model.entity.RefreshToken;
import com.example.spring_auth_service.model.entity.User;
import com.example.spring_auth_service.model.entity.VerificationToken;
import com.example.spring_auth_service.service.*;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

import static com.example.spring_auth_service.constant.ApplicationConstant.BEARER_PREFIX;
import static com.example.spring_auth_service.model.enums.ExceptionConstant.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {
    private final UserService userService;
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final BlackListedTokenService blackListedTokenService;
    private final RefreshTokenService refreshTokenService;
    private final VerificationTokenService verificationTokenService;
    private final UserVerificationService userVerificationService;
    private final EmailService emailService;
    private final JwtConfig jwtConfig;
    private final UserMapper userMapper;

    @Override
    public RegisteredUserResponse registerUser(UserRegistrationRequest request) {
        User user = userMapper.userRegistrationRequestToUser(request);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User registeredUser = userService.create(user);

        VerificationToken verificationToken = verificationTokenService.create(registeredUser);

        userVerificationService.sendVerificationEmail(user.getEmail(), verificationToken.getToken());

        return userMapper.userToRegisteredUserResponse(registeredUser);
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        var authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.username(), request.password()));

        User user = (User) authentication.getPrincipal();

        userVerificationService.checkUserVerified(user);

        String accessToken = jwtService.generateToken(user);
        RefreshToken refreshToken = refreshTokenService.create(request.username());

        return LoginResponse.builder()
                .accessToken(accessToken)
                .expiresAt(LocalDateTime.now()
                        .plus(Duration.ofMillis(jwtConfig.getTokenExpiration())))
                .refreshToken(refreshToken)
                .build();
    }

    @Override
    public void logout(String authorizationHeader) {
        String token = authorizationHeader.substring(BEARER_PREFIX.length());
        Date expirationDate = jwtService.extractExpiration(token);

        blackListedTokenService.markAsBlacklisted(token, expirationDate);
    }

    @Override
    public LoginResponse generateNewAccessToken(String refreshToken) {
        if(StringUtils.isBlank(refreshToken)) {
            throw new RefreshTokenMissingException(REFRESH_TOKEN_MISSING.getMessage());
        }

        RefreshToken refreshTokenEntity = refreshTokenService.findByToken(refreshToken)
                .orElseThrow(() -> new InvalidRefreshTokenException(INVALID_REFRESH_TOKEN.getMessage()));

        if(refreshTokenEntity.isExpired()) {
            refreshTokenService.delete(refreshTokenEntity);
            throw new InvalidRefreshTokenException(INVALID_REFRESH_TOKEN.getMessage());
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(refreshTokenEntity .getUser().getUsername());
        String accessToken = jwtService.generateToken(userDetails);

        return LoginResponse.builder()
                .accessToken(accessToken)
                .expiresAt(LocalDateTime.now()
                        .plus(Duration.ofMillis(jwtConfig.getTokenExpiration())))
                .build();
    }

    @Override
    @Transactional
    public void verifyUser(String token) {
        VerificationToken verificationToken = verificationTokenService.findByToken(token);

        if(verificationToken.isExpired()){
            throw new VerificationTokenExpiredException(VERIFICATION_TOKEN_EXPIRED.getMessage());
        }

        User user = verificationToken.getUser();
        user.setVerified(true);
        userService.update(user);

        verificationTokenService.delete(verificationToken);
    }

    @Override
    public void sendPasswordResetEmail(String email) {
        Optional<User> userOptional = userService.findByEmail(email);

        if(userOptional.isEmpty()) {
            log.warn("No account found for email: {}", email);
            return;
        }

        VerificationToken verificationToken = verificationTokenService.create(userOptional.get());

        try {
            emailService.sendMailAsync(email, "Reset Your Password",
                    String.format("""
                            Hi,<br/>
                            We received a request to reset your password. Click the link below to set a new one:<br/>
                            <a href='http://localhost:8080/auth/reset-password?token=%s'>Reset Password</a>
                            <br/><br/>
                            If you didn’t request this, ignore this email.
                            <br/><br/>
                            Thanks,<br/>
                            Auth Service Team
                            """, verificationToken.getToken()));
        } catch (MessagingException e) {
            log.error("Error while sending password reset email. Message = {}", e.getMessage(), e);
        }
    }

    @Override
    public void resetPassword(ResetPasswordRequest request) {
        VerificationToken verificationToken = verificationTokenService.findByToken(request.token());

        if(verificationToken.isExpired()){
            throw new VerificationTokenExpiredException(VERIFICATION_TOKEN_EXPIRED.getMessage());
        }

        User user = verificationToken.getUser();
        user.setPassword(passwordEncoder.encode(request.password()));
        userService.update(user);

        verificationTokenService.delete(verificationToken);
    }
}
