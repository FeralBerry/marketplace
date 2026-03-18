import MegaMenuLIElement from "./MegaMenuLIElement.tsx";

const MegamenuULElement = (links: any) => {
    return (
        <>
            {
                links
                    ?
                    (
                        <>
                            <li className="menu-title uppercase">{links.title}</li>
                            {
                                MegaMenuLIElement(links.megaSubMenus)
                            }
                        </>
                    )
                    : ""
            }
        </>
    )
}
export default MegamenuULElement;