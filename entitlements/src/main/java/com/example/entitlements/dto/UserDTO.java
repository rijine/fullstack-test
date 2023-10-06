package com.example.entitlements.dto;

import com.example.entitlements.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDTO {
    private Integer userId;
    private String email;
    private String name;
    private Role role;
}
