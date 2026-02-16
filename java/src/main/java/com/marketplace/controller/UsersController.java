package com.marketplace.controller;

import com.marketplace.dto.UsersDTO;
import com.marketplace.entity.Users;
import com.marketplace.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UsersController {
    private UsersService usersService;
    @PostMapping
    public ResponseEntity<UsersDTO> createUser(@RequestBody UsersDTO usersDTO){
        UsersDTO savedUser = usersService.createUsers(usersDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
}
