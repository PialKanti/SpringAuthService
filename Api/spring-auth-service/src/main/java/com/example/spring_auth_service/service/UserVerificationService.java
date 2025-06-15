package com.example.spring_auth_service.service;

import com.example.spring_auth_service.model.entity.User;

public interface UserVerificationService {
    void sendVerificationLink(String email, String verificationToken);
    void ensureUserVerified(User user);
}
