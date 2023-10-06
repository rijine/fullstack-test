package com.example.entitlements.service;

import com.example.entitlements.dto.Response;
import com.example.entitlements.model.Entitlement;
import com.example.entitlements.repository.EntitlementsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EntitlementsService {
    private final EntitlementsRepository repository;

    public List<Entitlement> getAll() {
        return repository.getAll();
    }

    public List<Entitlement> getAllByUser(final Integer userId) {
        return repository.getAllByUserId(userId);
    }

    public Response<ArrayList<Integer>> deleteAccounts(final Integer userId, final List<Integer> accountIds) {
        var accounts = new ArrayList<Integer>();
        for(var accountId: accountIds){
            var success = repository.deleteAccount(userId, accountId);
            if(!success) {
                accounts.add(accountId);
            }
        }
        if(accounts.size() == 0) {
            return new Response<>(true, "Successfully deleted accounts", accounts);
        }
        return new Response<>(false, "Failed to delete accounts", accounts);
    }

    public Response<ArrayList<Integer>> addAccounts(Integer userId, List<Integer> accountIds) {
        var accounts = new ArrayList<Integer>();
        for(var accountId: accountIds){
            var success = repository.addAccount(userId, accountId);
            if(!success) {
                accounts.add(accountId);
            }
        }
        if(accounts.size() == 0) {
            return new Response<>(true, "Successfully added accounts", accounts);
        }
        return new Response<>(false, "Failed to add accounts", accounts);
    }
}