import {AppConstants} from "../../utils/AppConstants.tsx";
import {Link} from "react-router-dom";
import {getMenu} from "./menu/menuAxios.tsx";
import {useState} from "react";
import {toast} from "react-toastify";
import MenuTypeComponent from "./menu/MenuTypeComponent.tsx";

const MenuComponent =  ()=>{
    const [menu,setMenu] = useState([])
    if(menu.length == 0){
        getMenu().then(res =>{
            if (res !== null){
                try {
                    // @ts-ignore
                    setMenu(res.data)
                } catch (err){
                    toast.error("Error: " + err)
                }
            }
        })
    }

    return (
        <nav id="primary-menu" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={AppConstants.BASE_IMG_URL + "logo/logo.png"} alt="main logo"/>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-content">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0 main-menu">
                        {
                            MenuTypeComponent(menu)
                        }
                    </ul>
                    <div className="col-md-3 hidden-sm hidden-xs">
                        <div className="search-box global-table">
                            <div className="global-row">
                                <div className="global-cell">
                                    <form action="#">
                                        <div className="input-box">
                                            <input className="single-input" placeholder="Search anything"
                                                   type="text"/>
                                            <button className="src-btn"><i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default MenuComponent;

