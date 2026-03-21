package com.market.mapper;

import com.market.entity.MegaSubMenu;
import com.market.responses.MegaSubMenuResponse;
import org.springframework.stereotype.Service;

@Service
public class FrontMegaSubMenuMapper {
    public MegaSubMenuResponse megaSubMenuResponse(MegaSubMenu megaSubMenu){
        MegaSubMenuResponse megaSubMenuResponse = new MegaSubMenuResponse();
        megaSubMenuResponse.setId(megaSubMenu.getId());
        megaSubMenuResponse.setLink(megaSubMenu.getLink());
        megaSubMenuResponse.setTitle(megaSubMenu.getTitle());
        return megaSubMenuResponse;
    }
}
