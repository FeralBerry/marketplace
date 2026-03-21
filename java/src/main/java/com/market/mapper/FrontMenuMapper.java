package com.market.mapper;

import com.market.entity.FrontMenu;
import com.market.responses.FrontMegaMenuLinksResponse;
import com.market.responses.FrontMenuResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@AllArgsConstructor
public class FrontMenuMapper {
    private final FrontMegaMenuLinksMapper frontMegaMenuLinksMapper;

    public FrontMenuResponse FrontMenuToFrontMenuResponse(FrontMenu frontMenu){
        FrontMenuResponse frontMenuResponse = new FrontMenuResponse();
        frontMenuResponse.setId(frontMenu.getId());
        frontMenuResponse.setTitle(frontMenu.getTitle());
        frontMenuResponse.setMenuType(frontMenu.getMenuType());
        List<FrontMegaMenuLinksResponse> list = new ArrayList<>();
        frontMenu.getMegaMenuLinksList().forEach((item) -> {
            list.add(frontMegaMenuLinksMapper.FrontMegaMenuLinksToFrontMegaMenuLinksResponse(item));
        });
        frontMenuResponse.setMegaMenuLinksList(list);
        frontMenuResponse.setBaseUrl(frontMenu.getBaseUrl());
        return frontMenuResponse;
    }
}
