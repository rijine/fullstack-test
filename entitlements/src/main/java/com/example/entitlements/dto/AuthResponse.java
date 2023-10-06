package com.example.entitlements.dto;

import com.example.entitlements.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private final String token;
    private final String refreshToken;
    private final Boolean success;
    private final String name;
    private final Role role;
}
