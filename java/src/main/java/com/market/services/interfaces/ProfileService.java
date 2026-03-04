package com.market.services.interfaces;

import com.market.requests.ProfileRequest;
import com.market.responses.ProfileResponse;

public interface ProfileService {
    ProfileResponse createProfile(ProfileRequest profileRequest);
    ProfileResponse getProfile(String email);
}
