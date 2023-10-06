package com.example.entitlements.repository;

import com.example.entitlements.model.Role;
import com.example.entitlements.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {
    private final static List<User> USERS;

    static {
        USERS = List.of(
                new User(101, "admin@x.com", "$2a$10$YtqejR7fiAsr2tD.LGFqXujockH8.OPi1yPSlSIIB.i0xYaVmziTO", "ABC", Role.ADMIN),
                new User(102, "user1@x.com", "$2a$10$YtqejR7fiAsr2tD.LGFqXujockH8.OPi1yPSlSIIB.i0xYaVmziTO", "PQR", Role.USER),
                new User(103, "user2@x.com", "$2a$10$YtqejR7fiAsr2tD.LGFqXujockH8.OPi1yPSlSIIB.i0xYaVmziTO", "XYZ", Role.USER),
                new User(104, "user3@x.com", "$2a$10$YtqejR7fiAsr2tD.LGFqXujockH8.OPi1yPSlSIIB.i0xYaVmziTO", "QQQ", Role.USER)
        );
    }

    public Optional<User> findByEmailId(String email) {
        return USERS.stream().filter(user -> user.getEmail().equals(email)).findFirst();
    }

    public List<User> getAll() {
        return USERS;
    }
}
