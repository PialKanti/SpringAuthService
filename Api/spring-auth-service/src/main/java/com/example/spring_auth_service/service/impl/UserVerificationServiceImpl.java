package com.example.spring_auth_service.service.impl;

import com.example.spring_auth_service.exception.EmailNotVerifiedException;
import com.example.spring_auth_service.model.entity.User;
import com.example.spring_auth_service.service.EmailService;
import com.example.spring_auth_service.service.UserVerificationService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import static com.example.spring_auth_service.model.enums.ExceptionConstant.EMAIL_NOT_VERIFIED;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserVerificationServiceImpl implements UserVerificationService {
    @Value("${application.features.user-verification.enabled}")
    private boolean isVerificationEnabled;
    private final EmailService emailService;

    @Override
    public void sendVerificationLink(String email, String verificationToken) {
        if(!isVerificationEnabled) {
            return;
        }

        try {
            emailService.sendMailAsync(email, "Verify your account",
                    String.format("""
                            Hi,<br/>
                            Please verify your email by clicking the link below:<br/>
                            <a href='http://localhost:8080/api/v1/auth/verify?token=%s'>Verify Now</a>
                            <br/><br/>
                            If you didn’t request this, ignore this email.
                            <br/><br/>
                            Thanks,<br/>
                            Auth Service Team
                            """, verificationToken));
        } catch (MessagingException e) {
            log.error("Error while sending verification email. Message = {}", e.getMessage(), e);
        }
    }

    @Override
    public void ensureUserVerified(User user) {
        if(!isVerificationEnabled) {
            return;
        }

        if(!user.isVerified()) {
            throw new EmailNotVerifiedException(EMAIL_NOT_VERIFIED.getMessage());
        }
    }
}
