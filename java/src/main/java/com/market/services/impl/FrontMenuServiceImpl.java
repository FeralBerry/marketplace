package com.market.services.impl;

import com.market.entity.FrontMenu;
import com.market.entity.SocialLinks;
import com.market.repositories.FrontMenuRepository;
import com.market.repositories.SocialLinksRepository;
import com.market.services.interfaces.FrontMenuService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FrontMenuServiceImpl implements FrontMenuService {
    private FrontMenuRepository frontMenuRepository;
    private SocialLinksRepository socialLinksRepository;

    @Override
    public List<FrontMenu> getFrontMenu() {
        return frontMenuRepository.findAll();
    }

    @Override
    public List<SocialLinks> getSocialLink() {
        return socialLinksRepository.findAll();
    }
}