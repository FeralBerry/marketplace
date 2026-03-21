package com.market.services.impl;

import com.market.entity.SocialLinks;
import com.market.mapper.FrontMenuMapper;
import com.market.repositories.FrontMenuRepository;
import com.market.repositories.SocialLinksRepository;
import com.market.responses.FrontMenuResponse;
import com.market.services.interfaces.FrontMenuService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class FrontMenuServiceImpl implements FrontMenuService {
    private FrontMenuRepository frontMenuRepository;
    private SocialLinksRepository socialLinksRepository;
    private FrontMenuMapper frontMenuMapper;
    @Override
    public List<FrontMenuResponse> getFrontMenu() {
        List<FrontMenuResponse> list = new ArrayList<>();
        frontMenuRepository.findAll().forEach((item) -> {
            list.add(frontMenuMapper.FrontMenuToFrontMenuResponse(item));
        });
        return list;
    }

    @Override
    public List<SocialLinks> getSocialLink() {
        return socialLinksRepository.findAll();
    }
}