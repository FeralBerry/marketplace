package com.marketplace.service;

import com.marketplace.entity.User;
import com.marketplace.exception.UserNotFoundException;
import com.marketplace.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService  implements org.springframework.security.core.userdetails.UserDetailsService {
    @Autowired
    private final UsersRepository usersRepository;

    public UserDetailsService(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usersRepository.findUsersByEmail(username)
                .orElseThrow(() -> new UserNotFoundException(
                                String.format("User '%s' not found", username)
                        )
                );
    }
}
