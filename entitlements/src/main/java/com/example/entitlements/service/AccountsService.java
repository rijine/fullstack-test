package com.example.entitlements.service;

import com.example.entitlements.model.Account;
import com.example.entitlements.model.AccountEntitled;
import com.example.entitlements.model.Entitlement;
import com.example.entitlements.repository.AccountsRepository;
import com.example.entitlements.repository.EntitlementsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AccountsService {
    private final AccountsRepository repository;
    private final EntitlementsRepository entitlementsRepository;

    public List<Account> getAll() {
        return repository.getAll();
    }
    public List<AccountEntitled> getAccounts(final Integer userId) {
        var existingAccounts = entitlementsRepository.getAll().stream()
                .filter(e -> e.getUserId().equals(userId))
                .map(Entitlement::getAccountId)
                .collect(Collectors.toSet());
        return repository.getAll().stream().map(account -> {
            var isAdded = existingAccounts.contains(account.getAccountId());
            return new AccountEntitled(account, isAdded);
        }).toList();
    }

}
