package com.market.services.impl;

import com.market.entity.User;
import com.market.repositories.UserRepository;
import com.market.requests.ProfileRequest;
import com.market.responses.ProfileResponse;
import com.market.services.interfaces.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailServiceImpl emailService;
    @Override
    public ProfileResponse createProfile(ProfileRequest request) {
        User newProfile = convertToUser(request);
        if(userRepository.existsByEmail(request.getEmail())){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already exists");
        }
        newProfile = userRepository.save(newProfile);
        return convertToProfileResponse(newProfile);
    }

    @Override
    public ProfileResponse getProfile(String email) {
        User existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));
        return convertToProfileResponse(existingUser);
    }

    @Override
    public void sendResetOtp(String email) {
        User existingEntity = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));
        //Generate 6 digit otp
        String otp = String.valueOf(ThreadLocalRandom.current().nextInt(100_000,1_000_000));
        //calculate expiry time (current time + 15 minutes in milliseconds)
        long expirationTime = System.currentTimeMillis() + (15 * 60 * 1000);
        //update the profile
        existingEntity.setResetOtp(otp);
        existingEntity.setResetOtpExpireAt(expirationTime);
        //save into the database
        userRepository.save(existingEntity);
        try{
            emailService.sendResetOtpEmail(existingEntity.getEmail(),otp);
        } catch (Exception e){
            throw new RuntimeException("Unable to send email");
        }
    }

    @Override
    public void resetPassword(String email, String otp, String newPassword) {
        User existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));
        if(existingUser.getResetOtp() == null || existingUser.getResetOtp().equals(otp)){
            throw new RuntimeException("Invalid OTP");
        }
        if(existingUser.getResetOtpExpireAt() < System.currentTimeMillis()){
            throw new RuntimeException("OTP Expired");
        }
        existingUser.setPassword(passwordEncoder.encode(newPassword));
        existingUser.setResetOtp(null);
        existingUser.setResetOtpExpireAt(0L);
        userRepository.save(existingUser);
    }

    @Override
    public void sendOtp(String email) {
        User existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));
        if(existingUser.getIsAccountVerified() != null && existingUser.getIsAccountVerified()){
            return;
        }
        //Generate 6 digit otp
        String otp = String.valueOf(ThreadLocalRandom.current().nextInt(100_000,1_000_000));
        //calculate expiry time (current time + 24 hours in milliseconds)
        long expirationTime = System.currentTimeMillis() + (24 * 60 * 60 * 1000);
        //Update the user entity
        existingUser.setVerifyOtp(otp);
        existingUser.setVerifyOtpExpirationAt(expirationTime);
        //save to database
        userRepository.save(existingUser);
    }

    @Override
    public void verifyOtp(String email, String otp) {

    }

    @Override
    public String getLoggedUserId(String email) {
        User existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));
        return existingUser.getUserId();
    }

    private User convertToUser(ProfileRequest request){
        return User.builder()
                .email(request.getEmail())
                .userId(UUID.randomUUID().toString())
                .name(request.getName())
                .password(passwordEncoder.encode(request.getPassword()))
                .isAccountVerified(false)
                .resetOtpExpireAt(0L)
                .verifyOtp(null)
                .verifyOtpExpirationAt(0L)
                .resetOtp(null)
                .build();
    }
    private ProfileResponse convertToProfileResponse(User newProfile){
        return ProfileResponse.builder()
                .name(newProfile.getName())
                .email(newProfile.getEmail())
                .userId(newProfile.getUserId())
                .isAccountVerified(newProfile.getIsAccountVerified())
                .build();
    }
}
