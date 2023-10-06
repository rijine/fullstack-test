package com.example.entitlements.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.example.entitlements.model.Permission.*;
import static com.example.entitlements.model.Permission.READ;

@RequiredArgsConstructor
public enum Role {

    USER(
            Set.of(
                    READ
            )),
    ADMIN(
            Set.of(
                    READ,
                    UPDATE,
                    DELETE
            )
    );

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}