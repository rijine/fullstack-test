package com.example.entitlements.controller;

import com.example.entitlements.model.Account;
import com.example.entitlements.model.AccountEntitled;
import com.example.entitlements.service.AccountsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/accounts")
@RequiredArgsConstructor
@RestController
public class AccountsController {
    private final AccountsService accountsService;

    @GetMapping("/")
    public List<Account> getAccounts() {
        return accountsService.getAll();
    }

    @GetMapping("/user/{userId}")
    public List<AccountEntitled> getAccounts(@PathVariable Integer userId) {
        return accountsService.getAccounts(userId);
    }
}
