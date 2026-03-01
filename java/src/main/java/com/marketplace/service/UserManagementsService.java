package com.marketplace.service;

import com.marketplace.components.JWTUtils;
import com.marketplace.dto.SignInDTO;
import com.marketplace.entity.User;
import com.marketplace.repository.UsersRepository;
import com.marketplace.service.interfaces.UserManagementsInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class UserManagementsService implements UserManagementsInterface {
    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public SignInDTO register(SignInDTO signInDTO){
        SignInDTO res = new SignInDTO();
        try{
            User user = new User();
            user.setEmail(signInDTO.getEmail());
            user.setName(signInDTO.getName());
            user.setRole(signInDTO.getRole());
            user.setPassword(passwordEncoder.encode(signInDTO.getPassword()));
            User userResult = usersRepository.save(user);
            if(userResult.getId() > 0){
                res.setUser(userResult);
                res.setMessage("User saved successfully");
                res.setStatusCode(200);
            }
        } catch (Exception e){
            res.setStatusCode(500);
            res.setError(e.getMessage());
        }
        return res;
    }
    public SignInDTO login(SignInDTO signInDTO){
        SignInDTO res = new SignInDTO();
        try{
            authenticationManager
                    .authenticate(
                            new UsernamePasswordAuthenticationToken(res.getEmail(),res.getPassword())
                    );
            var user = usersRepository
                    .findUsersByEmail(signInDTO.getEmail())
                    .orElseThrow();
            var jwt = jwtUtils
                    .generateToken(user);
            var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(),user);
            res.setStatusCode(200);
            res.setToken(jwt);
            res.setRefreshToken(refreshToken);
            res.setExpirationTime("24Hr");
            res.setMessage("Successfully logged in");
        } catch (Exception e){
            res.setStatusCode(500);
            res.setMessage(e.getMessage());
        }
        return res;
    }
    public SignInDTO refreshToken(SignInDTO signInDTO){
        SignInDTO res = new SignInDTO();
        try {
            String email = jwtUtils.extractUsername(signInDTO.getToken());
            User user = usersRepository.findUsersByEmail(email).orElseThrow();
            if(jwtUtils.isTokenValid(signInDTO.getToken(), user)){
                var jws = jwtUtils.generateToken(user);
                res.setStatusCode(200);
                res.setToken(jws);
                res.setRefreshToken(signInDTO.getToken());
                res.setExpirationTime("24Hr");
                res.setMessage("Successfully refreshed token");
            }
            res.setStatusCode(200);
        } catch (Exception e){
            res.setStatusCode(500);
            res.setMessage(e.getMessage());
        }
        return res;
    }
    public SignInDTO getAllUser(){
        SignInDTO res = new SignInDTO();
        try{
            List<User> result = usersRepository.findAll();
            if(!result.isEmpty()){
                res.setUsersList(result);
                res.setStatusCode(200);
                res.setMessage("Successful");
            } else {
                res.setStatusCode(404);
                res.setMessage("No user found");
            }
        } catch (Exception e){
            res.setStatusCode(500);
            res.setMessage("Error occurred: " + e.getMessage());
        }
        return res;
    }
    public SignInDTO getUserById(Long id){
        SignInDTO res = new SignInDTO();
        try {
            User user = usersRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
            res.setUser(user);
            res.setStatusCode(200);
            res.setMessage("User with id '" + id + "' found successfully");
        } catch (Exception e){
            res.setStatusCode(500);
            res.setMessage("Error occurred: " + e.getMessage());
        }
        return res;
    }
    public SignInDTO deleteUser(Long id){
        SignInDTO res = new SignInDTO();
        try {
            Optional<User> userOptional = usersRepository.findById(id);
            if(userOptional.isPresent()){
                usersRepository.deleteById(id);
                res.setStatusCode(200);
                res.setMessage("User with id '" + id + "' successfully deleted");
            } else {
                res.setStatusCode(404);
                res.setMessage("User not found for deletion");
            }
        } catch (Exception e){
            res.setStatusCode(500);
            res.setMessage("Error occurred while deleting user: " + e.getMessage());
        }
        return res;
    }
    public SignInDTO updateUser(Long id, User user){
        SignInDTO res = new SignInDTO();
        try {
            Optional<User> userOptional = usersRepository.findById(id);
            if(userOptional.isPresent()){
                User existingUser = userOptional.get();
                existingUser.setEmail(user.getEmail());
                existingUser.setName(user.getName());
                existingUser.setRole(user.getRole());
                if(user.getPassword() != null && !user.getPassword().isEmpty()){
                    existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
                }
                User newUser = usersRepository.save(existingUser);
                res.setUser(newUser);
                res.setStatusCode(200);
                res.setMessage("User updated successfully");
            } else {
                res.setStatusCode(404);
                res.setMessage("User not found for update");
            }
        } catch (Exception e){
            res.setStatusCode(500);
            res.setMessage("Error occurred while updating user: " + e.getMessage());
        }
        return res;
    }
    public SignInDTO getInfo(String email){
        SignInDTO res = new SignInDTO();
        try{
            Optional<User> user = usersRepository.findUsersByEmail(email);
            if(user.isPresent()){
                res.setUser(user.get());
                res.setStatusCode(200);
                res.setMessage("Successful");
            } else {
                res.setStatusCode(404);
                res.setMessage("User not found");
            }
        } catch (Exception e){
            res.setStatusCode(500);
            res.setMessage("Error occurred while getting user info: " + e.getMessage());
        }
        return res;
    }
}
