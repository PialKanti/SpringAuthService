package com.example.spring_auth_service.service.impl;

import com.example.spring_auth_service.config.JwtConfig;
import com.example.spring_auth_service.exception.EmailNotVerifiedException;
import com.example.spring_auth_service.exception.InvalidRefreshTokenException;
import com.example.spring_auth_service.exception.RefreshTokenMissingException;
import com.example.spring_auth_service.mapper.UserMapper;
import com.example.spring_auth_service.model.dto.request.LoginRequest;
import com.example.spring_auth_service.model.dto.request.UserRegistrationRequest;
import com.example.spring_auth_service.model.dto.response.LoginResponse;
import com.example.spring_auth_service.model.dto.response.RegisteredUserResponse;
import com.example.spring_auth_service.model.entity.RefreshToken;
import com.example.spring_auth_service.model.entity.User;
import com.example.spring_auth_service.model.entity.VerificationToken;
import com.example.spring_auth_service.service.*;
import jakarta.mail.MessagingException;
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
    private final EmailService emailService;
    private final JwtConfig jwtConfig;
    private final UserMapper userMapper;

    @Override
    public RegisteredUserResponse registerUser(UserRegistrationRequest request) {
        User user = userMapper.userRegistrationRequestToUser(request);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User registeredUser = userService.save(user);

        VerificationToken verificationToken = verificationTokenService.create(registeredUser);

        try {
            emailService.sendMailAsync(user.getEmail(), "Verify your account",
                    String.format("""
                            Hi,<br/>
                            Please verify your email by clicking the link below:<br/>
                            <a href='http://localhost:8080/api/v1/verify?token=%s'>Verify Now</a>
                            <br/><br/>
                            If you didn’t request this, ignore this email.
                            <br/><br/>
                            Thanks,<br/>
                            Auth Service Team
                            """, verificationToken.getToken()));
        } catch (MessagingException e) {
            log.error("Error while sending verification email. Message = {}", e.getMessage(), e);
        }

        return userMapper.userToRegisteredUserResponse(registeredUser);
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        var authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.username(), request.password()));

        User user = (User) authentication.getPrincipal();

        if(!user.isVerified()) {
            throw new EmailNotVerifiedException(EMAIL_NOT_VERIFIED.getMessage());
        }

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
}
