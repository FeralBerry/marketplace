package com.market.controllers;

import com.market.requests.ProfileRequest;
import com.market.responses.ProfileResponse;
import com.market.services.impl.EmailServiceImpl;
import com.market.services.interfaces.ProfileService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@RestController
@AllArgsConstructor
public class ProfileController {
    private final ProfileService profileService;
    private final EmailServiceImpl emailService;
    private final ResourceLoader resourceLoader;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ProfileResponse register(@Valid @RequestBody ProfileRequest request) throws IOException {
        ProfileResponse response = profileService.createProfile(request);
        String emailTo = response.getEmail();
        emailService.sendHTMLEmail(emailTo,"Success register","register");
        return response;
    }
    @GetMapping("/profile")
    public ProfileResponse getProfile(@CurrentSecurityContext(expression = "authentication?.name") String email){
        return profileService.getProfile(email);
    }
}