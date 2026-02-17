package com.marketplace.service;

import com.marketplace.dto.UsersDTO;

import java.util.List;

public interface UsersService {
    UsersDTO createUsers(UsersDTO usersDTO);
    UsersDTO getUserById(Long userId);
    List<UsersDTO> getAllUsers();
}
