package com.example.spring_auth_service.service;

import com.example.spring_auth_service.model.entity.User;

public interface UserVerificationService {
    default void sendVerificationEmail(String email, String verificationToken) {
    }

    default void checkUserVerified(User user) {
    }
}
