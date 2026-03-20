package com.market.controllers.api;

import com.market.entity.FrontMenu;
import com.market.entity.SocialLinks;
import com.market.services.impl.FrontMenuServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/front")
public class MenuFrontController {
    private FrontMenuServiceImpl frontMenuServiceImpl;

    @PostMapping("/menu")
    public List<FrontMenu> getFrontMenu(){
        return frontMenuServiceImpl.getFrontMenu();
    }
    @PostMapping("/social")
    public List<SocialLinks> getSocialLink(){
        return frontMenuServiceImpl.getSocialLink();
    }
}