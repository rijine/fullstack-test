package com.example.entitlements.repository;

import com.example.entitlements.model.Entitlement;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class EntitlementsRepository {
    private static final List<Entitlement> ENTITLEMENTS;

    static {
        ENTITLEMENTS = new ArrayList<>(List.of(
                new Entitlement(101, 1000001),
                new Entitlement(101, 1000002),
                new Entitlement(101, 1000003),
                new Entitlement(101, 1000004),
                new Entitlement(101, 1000005),
                new Entitlement(102, 1000001),
                new Entitlement(102, 1000002),
                new Entitlement(102, 1000003),
                new Entitlement(102, 1000004),
                new Entitlement(103, 1000002),
                new Entitlement(103, 1000003),
                new Entitlement(103, 1000005),
                new Entitlement(104, 1000001),
                new Entitlement(104, 1000004),
                new Entitlement(104, 1000005)
        ));
    }

    public List<Entitlement> getAllByUserId(Integer userId) {
        return ENTITLEMENTS.stream().filter(entitlement -> entitlement.getUserId().equals(userId)).toList();
    }

    public Optional<Entitlement> findByAccountId(Integer accountId) {
        return ENTITLEMENTS.stream().filter(entitlement -> entitlement.getAccountId().equals(accountId)).findFirst();
    }

    public List<Entitlement> getAll() {
        return ENTITLEMENTS;
    }

    public boolean deleteAccount(Integer userId, Integer accountId) {
        ENTITLEMENTS.removeIf(e -> e.getUserId().equals(userId) && e.getAccountId().equals(accountId));
        // in real scenario db call will wrap with try catch
        return true;
    }

    public boolean addAccount(Integer userId, Integer accountId) {
        // in real scenario db call will wrapped with try catch
        ENTITLEMENTS.add(new Entitlement(userId, accountId));
        // in real scenario db call will wrap with try catch
        return true;
    }
}
