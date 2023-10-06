package com.example.entitlements.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    READ("READ"),
    UPDATE("UPDATE"),
    DELETE("DELETE");

    @Getter
    private final String permission;
}