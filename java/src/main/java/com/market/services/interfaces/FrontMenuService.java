package com.market.services.interfaces;


import com.market.entity.SocialLinks;
import com.market.responses.FrontMenuResponse;

import java.util.List;

public interface FrontMenuService {
    List<FrontMenuResponse> getFrontMenu();

    List<SocialLinks> getSocialLink();
}