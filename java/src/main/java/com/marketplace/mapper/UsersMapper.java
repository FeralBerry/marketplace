package com.marketplace.mapper;

import com.marketplace.dto.UsersDTO;
import com.marketplace.entity.Users;
import jakarta.persistence.Column;

public class UsersMapper {
    public static UsersDTO mapToUsersDTO(Users users){
        return new UsersDTO(
                users.getId(),
                users.getName(),
                users.getEmail(),
                users.getPassword(),
                users.getEmailVerifiedAt(),
                users.getRoleId(),
                users.getRememberToken()
        );
    }
    public static Users mapToUsers(UsersDTO usersDTO){
        return new Users(
                usersDTO.getId(),
                usersDTO.getName(),
                usersDTO.getEmail(),
                usersDTO.getPassword(),
                usersDTO.getEmailVerifiedAt(),
                usersDTO.getRoleId(),
                usersDTO.getRememberToken()
        );
    }
}
