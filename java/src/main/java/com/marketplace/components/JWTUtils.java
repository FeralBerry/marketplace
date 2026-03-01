package com.marketplace.components;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

@Component
public class JWTUtils
{
    private final SecretKey key;
    @Value("${marketplace.app.expirationMs}")
    private static final long EXPIRATIONAL_TIME = 86400000;
    private JWTUtils(){
        String secretString = "qvJru2VhhJEWujsV3ONk9CuWT0bdQpyRNZMKuUGM1P0kRUO2ZmoHvZdczkw0VCQ1GHy93KdHXDF6qeoRPGKxOrrbAsUW2gmaMZiGDTFQdfuE9TMm5bxXRJhtR3bpi0kIKpTGbPurs1caSJ6EeT5Jge2TupO5Hhg9KxR3C17mJRtp1E5W8tzWeG6m2zEUqMkjuclr8WOmGiSHQsMCFHXoxAIvc8WxsaL5nkipg3A4BB01ogZOgKcvozdepsjeU9XW";
        byte[] keyBytes = Base64.getDecoder().decode(secretString.getBytes(StandardCharsets.UTF_8));
        this.key = new SecretKeySpec(keyBytes,"HmacSHA256");
    }
    public String generateToken(UserDetails userDetails){
        return Jwts.builder()
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + EXPIRATIONAL_TIME))
                .signWith(key)
                .compact();
    }
    public String generateRefreshToken(HashMap<String, Object> claims, UserDetails userDetails){
        return Jwts.builder()
                .claims(claims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + EXPIRATIONAL_TIME))
                .signWith(key)
                .compact();
    }
    public String extractUsername(String token){
        return extractClaims(token, Claims::getSubject);
    }
    private <T> T extractClaims(String token, Function<Claims, T> claimsTFunction){
        return claimsTFunction.apply(Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload());
    }
    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
    public boolean isTokenExpired(String token){
        return extractClaims(token, Claims::getExpiration).before(new Date());
    }
}
