package com.example.entitlements.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class EntitlementChangeRequest {
    private final Integer userId;
    private final List<Integer> accountIds;
}
