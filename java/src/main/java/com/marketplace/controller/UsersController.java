package com.marketplace.controller;

import com.marketplace.dto.UsersDTO;
import com.marketplace.entity.Users;
import com.marketplace.service.UsersService;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UsersController {
    private UsersService usersService;
    /**
     * Create new user REST API
     * */
    @PostMapping
    public ResponseEntity<UsersDTO> createUser(@RequestBody UsersDTO usersDTO){
        UsersDTO savedUser = usersService.createUsers(usersDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
    /**
     * Get user by id REST API
     * */
    @GetMapping("{id}")
    public ResponseEntity<UsersDTO> getUserById(@PathVariable("id") Long userId){
        UsersDTO usersDTO = usersService.getUserById(userId);
        return ResponseEntity.ok(usersDTO);
    }
    /**
     * Get All users Rest API
     */
    @GetMapping
    public ResponseEntity<List<UsersDTO>> getAllUsers(){
        List<UsersDTO> users = usersService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    /**
     * Update user Rest API
     */
    @PutMapping("{id}")
    public ResponseEntity<UsersDTO> updateUser(
            @PathVariable("id") Long userId,
            @RequestBody UsersDTO updatedUser
    ){
        UsersDTO user = usersService.updateUser(userId,updatedUser);
        return ResponseEntity.ok(user);
    }
}
