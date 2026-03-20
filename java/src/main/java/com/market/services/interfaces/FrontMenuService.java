package com.market.services.interfaces;


import com.market.entity.FrontMenu;
import com.market.entity.SocialLinks;

import java.util.List;

public interface FrontMenuService {
    List<FrontMenu> getFrontMenu();

    List<SocialLinks> getSocialLink();
}