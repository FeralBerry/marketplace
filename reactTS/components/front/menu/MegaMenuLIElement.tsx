import {Link} from "react-router-dom";

const MegaMenuLIElement = (links: any) => {
    return (
        <>
            {
                links ? links.map((link:any) => {
                         return (
                        <li className="mega-menu-li">
                            <Link to={link.link}>{link.title}</Link>
                        </li>
                        )
                    })
                    : ""
            }
        </>
    )
}
export default MegaMenuLIElement