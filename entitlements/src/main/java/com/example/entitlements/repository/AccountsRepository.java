package com.example.entitlements.repository;

import com.example.entitlements.model.Account;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public class AccountsRepository {
    private final static List<Account> ACCOUNTS;
    private final static String GBP = "GBP";
    static {
        var now = LocalDateTime.now();
        ACCOUNTS = List.of(
                new Account(1000001, now, GBP),
                new Account(1000002, now, GBP),
                new Account(1000003, now, GBP),
                new Account(1000004, now, GBP),
                new Account(1000005, now, GBP)
//                new Account(1000006, now, GBP),
//                new Account(1000007, now, GBP),
//                new Account(1000008, now, GBP),
//                new Account(1000009, now, GBP),
//                new Account(1000010, now, GBP),
//                new Account(1000011, now, GBP),
//                new Account(1000012, now, GBP)
        );
    }

    public Optional<Account> findByAccountId(Integer accountID) {
        return ACCOUNTS.stream().filter(account -> account.getAccountId().equals(accountID)).findFirst();
    }

    public List<Account> getAll() {
        return ACCOUNTS;
    }

}
