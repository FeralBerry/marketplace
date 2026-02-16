package com.marketplace.service.impl;

import com.marketplace.dto.UsersDTO;
import com.marketplace.entity.Users;
import com.marketplace.exception.ResourceNotFoundException;
import com.marketplace.mapper.UsersMapper;
import com.marketplace.repository.UsersRepository;
import com.marketplace.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UsersServiceImpl implements UsersService {
    private UsersRepository usersRepository;
    @Override
    public UsersDTO createUsers(UsersDTO usersDTO) {
        Users users = UsersMapper.mapToUsers(usersDTO);
        Users savedUsers = usersRepository.save(users);
        return UsersMapper.mapToUsersDTO(savedUsers);
    }

    @Override
    public UsersDTO getUserById(Long userId) {
        Users user = usersRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("User is not found with id: " + userId)
                );
        return UsersMapper.mapToUsersDTO(user);
    }
}
