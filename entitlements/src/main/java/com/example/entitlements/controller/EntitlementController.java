package com.example.entitlements.controller;

import com.example.entitlements.dto.EntitlementChangeRequest;
import com.example.entitlements.dto.Response;
import com.example.entitlements.model.Entitlement;
import com.example.entitlements.service.EntitlementsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/entitlements")
@RequiredArgsConstructor
public class EntitlementController {
    private final EntitlementsService entitlementsService;

    @GetMapping("/{userId}")
    public List<Entitlement> getEntitlements(@PathVariable Integer userId) {
        return entitlementsService.getAllByUser(userId);
    }

    @GetMapping("/")
    public List<Entitlement> getEntitlements() {
        return entitlementsService.getAll();
    }

    @PostMapping("/")
    public Response<ArrayList<Integer>> addEntitlements(@RequestBody EntitlementChangeRequest request) {
        return entitlementsService.addAccounts(request.getUserId(), request.getAccountIds());
    }

    @DeleteMapping("/")
    public Response<ArrayList<Integer>> deleteEntitlements(@RequestBody EntitlementChangeRequest request) {
        return entitlementsService.deleteAccounts(request.getUserId(), request.getAccountIds());
    }
}
