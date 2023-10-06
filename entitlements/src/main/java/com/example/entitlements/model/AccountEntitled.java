package com.example.entitlements.model;

import lombok.Data;

@Data
public class AccountEntitled extends Account {
    private boolean isAdded;

    public AccountEntitled(Account account, boolean isAdded) {
        this.setAccountId(account.getAccountId());
        this.setStartDt(account.getStartDt());
        this.setBaseCurrencyCode(account.getBaseCurrencyCode());
        this.setAdded(isAdded);
    }
}
