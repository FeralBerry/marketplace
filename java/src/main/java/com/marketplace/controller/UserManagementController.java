package com.marketplace.controller;

import com.marketplace.dto.SignInDTO;
import com.marketplace.entity.User;
import com.marketplace.service.UserManagementsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserManagementController {
    @Autowired
    private UserManagementsService userManagementsService;
    @PostMapping("/auth/register")
    public ResponseEntity<SignInDTO> register(@RequestBody SignInDTO signInDTO){
        return ResponseEntity.ok(userManagementsService.register(signInDTO));
    }
    @PostMapping("/auth/login")
    public ResponseEntity<SignInDTO> login(@RequestBody SignInDTO signInDTO){
        return ResponseEntity.ok(userManagementsService.login(signInDTO));
    }
    @PostMapping("/auth/refresh")
    public ResponseEntity<SignInDTO> refreshToken(@RequestBody SignInDTO signInDTO){
        return ResponseEntity.ok(userManagementsService.refreshToken(signInDTO));
    }
    @GetMapping("/admin/users")
    public ResponseEntity<SignInDTO> getAllUsers(){
        return ResponseEntity.ok(userManagementsService.getAllUser());
    }
    @GetMapping("/admin/user/{id}")
    public ResponseEntity<SignInDTO> getUserById(@PathVariable Long id){
        return ResponseEntity.ok(userManagementsService.getUserById(id));
    }
    @PutMapping("/admin/update/user/{id}")
    public ResponseEntity<SignInDTO> updateUserById(@PathVariable Long id, @RequestBody User user){
        return ResponseEntity.ok(userManagementsService.updateUser(id,user));
    }
    @GetMapping("/adminuser/get/profile")
    public ResponseEntity<SignInDTO> getProfile(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        assert authentication != null;
        String email = authentication.getName();
        SignInDTO res = userManagementsService.getInfo(email);
        return ResponseEntity.status(res.getStatusCode()).body(res);
    }
    @DeleteMapping("/admin/delete/user/{id}")
    public ResponseEntity<SignInDTO> deleteUserById(@PathVariable Long id){
        return ResponseEntity.ok(userManagementsService.deleteUser(id));
    }
}
