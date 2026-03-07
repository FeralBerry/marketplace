package com.market.controllers;

import com.market.requests.ProfileRequest;
import com.market.responses.ProfileResponse;
import com.market.services.impl.EmailServiceImpl;
import com.market.services.interfaces.ProfileService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@RestController
@AllArgsConstructor
public class ProfileController {
    private final ProfileService profileService;
    private final EmailServiceImpl emailService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ProfileResponse register(@Valid @RequestBody ProfileRequest request) {
        ProfileResponse response = profileService.createProfile(request);
        //emailService.sendSimpleEmail("admin@web-site.tech","Hi","test");
        HashMap<String, File> files = new HashMap<>();
        List<HashMap<String,File>> list = new ArrayList<>();
        File file = new File("C:\\Users\\FeralHorse\\Downloads\\А ну-ка, девушки 2026\\музыка для конкурса\\1. Что Где Когда - Чёрный ящик.mp3");
        String filename = "1. Что Где Когда - Чёрный ящик.mp3";
        files.put(filename,file);
        list.add(files);
        emailService.sendEmailWithAttachment("admin@web-site.tech","withAttachment","test",list);
        //TODO: send welcome email
        return response;
    }
    @GetMapping("/profile")
    public ProfileResponse getProfile(@CurrentSecurityContext(expression = "authentication?.name") String email){

        return profileService.getProfile(email);
    }
}
