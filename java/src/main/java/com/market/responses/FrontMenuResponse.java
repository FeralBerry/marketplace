package com.market.responses;

import com.market.entity.MegaMenuLinks;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FrontMenuResponse {
    private Long id;
    private String title;
    private String baseUrl;
    private Integer menuType;
    private String menuName;
    private Boolean isTitleMegaMenu;
    private List<MegaMenuLinks> megaMenuLinksList;
}