package com.marketplace.service.interfaces;

import com.marketplace.dto.SignInDTO;
import com.marketplace.entity.User;

public interface UserManagementsInterface {
    SignInDTO register(SignInDTO signInDTO);
    SignInDTO login(SignInDTO signInDTO);
    SignInDTO refreshToken(SignInDTO signInDTO);
    SignInDTO getAllUser();
    SignInDTO getUserById(Long id);
    SignInDTO deleteUser(Long id);
    SignInDTO updateUser(Long id, User user);
    SignInDTO getInfo(String email);
}
