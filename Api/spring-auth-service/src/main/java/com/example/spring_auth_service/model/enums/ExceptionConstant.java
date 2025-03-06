package com.example.spring_auth_service.model.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExceptionConstant {
    JWT_TOKEN_EXPIRED("JWT token has expired. Please log in again."),
    USER_NOT_FOUND("User not found. Please check your credentials."),
    USER_EMAIL_EXISTS("An account with this email already exists."),
    USERNAME_EXISTS("This username is already taken. Please choose a different one."),
    METHOD_ARGUMENT_NOT_VALID("One or more fields do not match the validation parameters");

    private final String message;
}
