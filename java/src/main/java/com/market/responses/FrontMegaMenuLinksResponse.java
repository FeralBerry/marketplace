package com.market.responses;

import com.market.entity.MegaSubMenu;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FrontMegaMenuLinksResponse {
    private Long id;
    private String title;
    private List<MegaSubMenuResponse> megaSubMenus;
}
