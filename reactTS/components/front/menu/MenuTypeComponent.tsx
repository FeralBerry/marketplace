import UsualLinkTypeComponent from "./UsualLinkTypeComponent.tsx";
import MegaMenuLinkComponent from "./MegaMenuLinkComponent.tsx";


const MenuTypeComponent = (menu: any[]) => {
    const menus = menu.map(m => {
        if(m.menuType === 0){
            return UsualLinkTypeComponent(m.baseUrl, m.title)
        }
        if (m.menuType === 1){
            return MegaMenuLinkComponent(m.baseUrl, m.title,m.megaMenuLinksList)
        }
    }
    );
    return (
        menus
    )
}
export default MenuTypeComponent;