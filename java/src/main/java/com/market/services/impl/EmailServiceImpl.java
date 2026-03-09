package com.market.services.impl;

import com.market.services.interfaces.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender mailSender;
    @Value("${spring.mail.username}")
    private String emailUserName;
    /**
     * Method send simple all settings at application.properties
     * toEmail - куда отправлять емаил
     * subject - заголовок
     * body - тело письма
     * */
    public String sendSimpleEmail(String toEmail, String subject, String body) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(emailUserName);
            message.setTo(toEmail);
            message.setSubject(subject);
            message.setText(body);
            mailSender.send(message);
            return "success";
        } catch (Exception e){
            return e.getMessage();
        }
    }
    /**
     * Method send attachment all settings at application.properties
     * toEmail - куда отправлять емаил
     * subject - заголовок
     * body - тело письма
     * files - список файлов заранее сгенерированных по полному пути
     * в HashMap
     * - 1 это название что будет прислано по емаил
     * - 2 сам файл
     * */
    public String sendEmailWithAttachment(String toEmail, String subject, String body, List<HashMap<String,File>> files){
        try{
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message,true);
            helper.setFrom(emailUserName);
            helper.setTo(toEmail);
            helper.setSubject(subject);
            helper.setText(body);
            files.forEach(file -> {
                for (Map.Entry<String, File> entry : file.entrySet()) {
                    try {
                        helper.addAttachment(entry.getKey(),entry.getValue());
                    } catch (MessagingException e) {
                        throw new RuntimeException(e);
                    }
                }
            });
            mailSender.send(message);
            return "success";
        } catch (Exception e){
            return e.getMessage();
        }
    }
    /**
     * Method send attachment all settings at application.properties
     * toEmail - куда отправлять емаил
     * subject - заголовок
     * htmlName - название файла html из папки templates.email
     * files - файлы которые можно будет использовать в шаблоне через название через cid
     * */
    public String sendHTMLEmail(String toEmail, String subject, String htmlName,List<HashMap<String,File>> files){
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = helper(message,toEmail,subject,htmlName);
            files.forEach(file -> {
                for (Map.Entry<String, File> entry : file.entrySet()) {
                    try {
                        helper.addInline(entry.getKey(),entry.getValue());
                    } catch (MessagingException e) {
                        throw new RuntimeException(e);
                    }
                }
            });
            mailSender.send(message);
            return "success";
        } catch (Exception e){
            return e.getMessage();
        }
    }
    public String sendHTMLEmail(String toEmail, String subject, String htmlName){
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = helper(message,toEmail,subject,htmlName);
            mailSender.send(message);
            return "success";
        } catch (Exception e){
            return e.getMessage();
        }
    }

    @Override
    public void sendResetOtpEmail(String toEmail, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(emailUserName);
        message.setTo(toEmail);
        message.setSubject("Password Reset Otp");
        message.setText("Your otp for resetting your password is " + otp + ". Use this OTP to proceed with resetting your password.");
        mailSender.send(message);
    }

    private MimeMessageHelper helper(MimeMessage message,String toEmail, String subject,String htmlName) throws MessagingException, IOException {
        MimeMessageHelper helper = new MimeMessageHelper(message,true);
        helper.setFrom(emailUserName);
        helper.setTo(toEmail);
        helper.setSubject(subject);
        try (var inputStream = Objects.requireNonNull(EmailServiceImpl.class.getResourceAsStream("/templates/email/" + htmlName + ".html"))){
            helper.setText(
                    new String(inputStream.readAllBytes(), StandardCharsets.UTF_8),true
            );
        }
        return helper;
    }
}
