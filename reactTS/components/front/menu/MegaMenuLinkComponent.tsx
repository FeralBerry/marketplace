import {Link} from "react-router-dom";
import {AppConstants} from "../../../utils/AppConstants";
import MegamenuULElement from "./MegamenuULElement.tsx";


const MegamenuLinkComponent = (url: string, megamenuName: string,menuLinks: any) => {
    return (
        <li className={location.pathname == url
            ? "nav-item dropdown dropdown-mega position-static current"
            : "nav-item dropdown dropdown-mega position-static"}
        >
            <Link className={location.pathname == url
                ? "nav-link active"
                : "nav-link"} to="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">{megamenuName}</Link>
            <div className="dropdown-menu">
                <div className="mega-content px-4">
                    <div className="container-fluid">
                        <div className="row">

                            {
                                menuLinks
                                ?
                                // @ts-ignore
                                menuLinks.map((link) => {
                                    return (
                                        <div className="col-sm-4 col-md-3 py-4 col-xs-12">
                                            <ul className="single-mega-item">
                                                {
                                                    MegamenuULElement(link)
                                                }
                                            </ul>
                                        </div>
                                    )
                                })
                                :
                                ""
                            }

                            <div className="col-12 col-sm-12 col-md-12 py-4">
                                <div className="mega-banner-img">
                                    <a href="single-product.html"><img
                                        src={AppConstants.BASE_IMG_URL + "banner/banner-fashion-02.jpg"}
                                        alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default MegamenuLinkComponent;