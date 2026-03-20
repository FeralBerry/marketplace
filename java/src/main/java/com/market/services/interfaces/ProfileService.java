package com.market.services.interfaces;

import com.market.requests.ProfileRequest;
import com.market.responses.ProfileResponse;

public interface ProfileService {
    ProfileResponse createProfile(ProfileRequest profileRequest);
    ProfileResponse getProfile(String email);
    void sendResetOtp(String email);
    void resetPassword(String email,String otp,String newPassword);
    void sendOtp(String email);
    void verifyOtp(String email, String otp);
}