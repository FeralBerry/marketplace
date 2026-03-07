package com.market.services.interfaces;

import java.io.File;
import java.util.HashMap;
import java.util.List;

public interface EmailService {
    String sendSimpleEmail(String toEmail, String subject, String body);
    String sendEmailWithAttachment(String toEmail, String subject, String body, List<HashMap<String, File>> files);
    String sendHTMLEmail(String toEmail, String subject, String htmlName,List<HashMap<String,File>> files);
    String sendHTMLEmail(String toEmail, String subject, String htmlName);
}
