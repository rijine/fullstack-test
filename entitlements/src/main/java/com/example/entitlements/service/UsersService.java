package com.example.entitlements.service;

import com.example.entitlements.dto.UserDTO;
import com.example.entitlements.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsersService {
    private final UserRepository repository;

    public List<UserDTO> getAll() {
        return repository.getAll()
                .stream()
                .map(user -> new UserDTO(user.getUserId(), user.getEmail(), user.getName(), user.getRole())).toList();
    }
}
