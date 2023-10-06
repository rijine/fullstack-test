package com.example.entitlements.controller;

import com.example.entitlements.dto.UserDTO;
import com.example.entitlements.service.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UsersService usersService;

    @GetMapping("/")
    public List<UserDTO> getUsers() {
        return usersService.getAll();
    }

//    @GetMapping("/accounts")
//    public String addAccount() {
//        return "ADD";
//    }
}
