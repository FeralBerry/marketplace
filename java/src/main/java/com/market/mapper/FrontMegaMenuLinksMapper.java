package com.market.mapper;

import com.market.entity.MegaMenuLinks;
import com.market.responses.FrontMegaMenuLinksResponse;
import com.market.responses.MegaSubMenuResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
@Service
@AllArgsConstructor
public class FrontMegaMenuLinksMapper {
    private final FrontMegaSubMenuMapper frontMegaSubMenuMapper;

    public FrontMegaMenuLinksResponse FrontMegaMenuLinksToFrontMegaMenuLinksResponse(MegaMenuLinks megaMenuLinks){
        FrontMegaMenuLinksResponse frontMegaMenuLinksResponse = new FrontMegaMenuLinksResponse();
        List<MegaSubMenuResponse> list = new ArrayList<>();
        frontMegaMenuLinksResponse.setId(megaMenuLinks.getId());
        frontMegaMenuLinksResponse.setTitle(megaMenuLinks.getTitle());

        megaMenuLinks.getMegaSubMenus().forEach((item) -> {
            list.add(frontMegaSubMenuMapper.megaSubMenuResponse(item));
        });
        frontMegaMenuLinksResponse.setMegaSubMenus(list);
        return frontMegaMenuLinksResponse;
    }
}
