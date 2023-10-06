package com.example.entitlements.service;

import com.example.entitlements.dto.AuthRequest;
import com.example.entitlements.dto.AuthResponse;
import com.example.entitlements.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final UserRepository repository;
    private final JwtService jwtService;

    public AuthResponse authenticate(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmailId(request.getEmail());
        if(user.isEmpty()) return new AuthResponse("", "",false, "", null);

        var userDetails = user.get();
        var refreshToken = jwtService.generateRefreshToken(userDetails);
        var jwtToken = jwtService.generateToken(userDetails);
        return new AuthResponse(jwtToken, refreshToken, true, userDetails.getName(), userDetails.getRole());
    }
}
