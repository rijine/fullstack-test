
package com.example.entitlements.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Response<T> {
    private final Boolean success;
    private final String message;
    private final T data;
}
