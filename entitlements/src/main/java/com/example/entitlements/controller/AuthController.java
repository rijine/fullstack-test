package com.example.entitlements.controller;

import com.example.entitlements.dto.AuthRequest;
import com.example.entitlements.dto.AuthResponse;
import com.example.entitlements.service.AuthService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService service;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request, HttpServletResponse res) {
        var response = service.authenticate(request);
        var cookie = new Cookie("token", response.getToken());
        cookie.setPath("/");
        // cookie.setSecure(true); // not running in SSL
        cookie.setHttpOnly(true);
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.addCookie(cookie);
        return ok(response);
    }
}
