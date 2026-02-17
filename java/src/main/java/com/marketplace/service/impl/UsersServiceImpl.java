package com.marketplace.service.impl;

import com.marketplace.dto.UsersDTO;
import com.marketplace.entity.Users;
import com.marketplace.exception.ResourceNotFoundException;
import com.marketplace.mapper.UsersMapper;
import com.marketplace.repository.UsersRepository;
import com.marketplace.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<UsersDTO> getAllUsers() {
        List<Users> users = usersRepository.findAll();
        return users.stream().map((user) ->
            UsersMapper.mapToUsersDTO(user)
        ).collect(Collectors.toList());
    }

    @Override
    public UsersDTO updateUser(Long userId, UsersDTO updatedUser) {
        Users user = usersRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("User is not found with id: " + userId)
                );

        user.setEmail(updatedUser.getEmail());
        user.setName(updatedUser.getName());
        user.setPassword(updatedUser.getPassword());
        user.setRoleId(updatedUser.getRoleId());
        user.setEmailVerifiedAt(updatedUser.getEmailVerifiedAt());
        user.setRememberToken(updatedUser.getRememberToken());

        Users updatedUserObj = usersRepository.save(user);

        return UsersMapper.mapToUsersDTO(updatedUserObj);
    }

    @Override
    public void deleteUser(Long userId) {
        Users user = usersRepository.findById(userId)
                .orElseThrow(
                        () -> new ResourceNotFoundException("User is not found with id: " + userId)
                );
        usersRepository.deleteById(userId);
    }
}
