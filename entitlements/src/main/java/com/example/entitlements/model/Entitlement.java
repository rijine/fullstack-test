
package com.example.entitlements.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Entitlement {
    private Integer userId;
    private Integer accountId;
}