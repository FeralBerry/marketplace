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

        File folder = new ClassPathResource("templates/emails/register.html").getFile();
        List<HashMap<String,File>> list = new ArrayList<>();
        HashMap<String, File> files = new HashMap<>();
        files.put("emails",folder);
        list.add(files);

        ProfileResponse response = profileService.createProfile(request);
        String emailTo = response.getEmail();

        //TODO: send welcome email
/*
        emailService.sendSimpleEmail(emailTo,"Success register on app","Success");
        //emailService.sendSimpleEmail(emailTo,"Hi","test");
        HashMap<String, File> files = new HashMap<>();
        List<HashMap<String,File>> list = new ArrayList<>();
        File file = new File("");
        String filename = "1. Что Где Когда - Чёрный ящик.mp3";
        files.put(filename,file);
        list.add(files);*/

        //emailService.sendEmailWithAttachment(emailTo,"withAttachment","test",list);
        String email = emailService.sendHTMLEmail(emailTo,"Success register","register");
        System.out.println(email);
        return response;
    }
    @GetMapping("/profile")
    public ProfileResponse getProfile(@CurrentSecurityContext(expression = "authentication?.name") String email){

        return profileService.getProfile(email);
    }
}
