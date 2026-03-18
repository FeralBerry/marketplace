package com.market.services.impl;

import com.market.entity.FrontMenu;
import com.market.repositories.FrontMenuRepository;
import com.market.services.interfaces.FrontMenuService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FrontMenuServiceImpl implements FrontMenuService {
    private FrontMenuRepository frontMenuRepository;

    public List<FrontMenu> getFrontMenu() {
        return frontMenuRepository.findAll();
    }
}
