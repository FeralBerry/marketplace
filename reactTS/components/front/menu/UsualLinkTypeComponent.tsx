import {Link, type To} from "react-router-dom";


const UsualLinkTypeComponent = (url: To, title:any) => {
    return (
        <li className={location.pathname === url ? "nav-item current" : "nav-item "}>
            <Link className={location.pathname === url ? "nav-link active" : "nav-link"} to={url}>{title}</Link>
        </li>
    )
}
export default UsualLinkTypeComponent;