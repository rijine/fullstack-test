package com.example.entitlements.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class EntitlementRequest {
    private int userId;
    private List<Integer> account;
}
