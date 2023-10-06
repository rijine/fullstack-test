package com.example.entitlements.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    private Integer accountId;
    private LocalDateTime startDt;
    private String baseCurrencyCode;

}