package com.marketplace.service.impl;

import com.marketplace.dto.UsersDTO;
import com.marketplace.entity.Users;
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
}
