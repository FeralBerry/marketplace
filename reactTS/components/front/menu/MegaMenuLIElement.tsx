import {Link} from "react-router-dom";

const MegaMenuLIElement = (links: any) => {
    return (
        <>
            {
                links ? links.map((link:any) => {
                         return (
                        <li className={location.pathname === link.link ? "mega-menu-li active" : "mega-menu-li"}>
                            <Link className={location.pathname === link.link ? "active" : ""} to={link.link}>{link.title}</Link>
                        </li>
                        )
                    })
                    : ""
            }
        </>
    )
}
export default MegaMenuLIElement