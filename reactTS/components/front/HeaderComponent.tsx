import {AppConstants} from "../../utils/AppConstants";
import MenuComponent from "./MenuComponent.tsx";
import {Link} from "react-router-dom";
import {getSocialLink} from "./menu/menuAxios";
import {useState} from "react";


function HeaderComponent() {
    const [socialLink,setSocialLink] = useState([])
    if(socialLink.length == 0){
        getSocialLink().then(res =>{
            if (res !== null){
                try {
                    // @ts-ignore
                    setSocialLink(res.data)
                } catch (err){
                    toast.error("Error: " + err)
                }
            }
        })
    }
    //const navigate = useNavigate();
    const auth = false
    function handleLogout(){

    }
    return (
            <header className="header-area header-wrapper">
                <div className="header-top-bar black-bg clearfix">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 auth-area">
                                <div className="login-register-area">
                                    <ul>
                                        {
                                            !auth &&
                                            <>
                                                <li><Link to="/login">Login</Link></li>
                                                <li><Link to="/register">Register</Link></li>
                                            </>
                                        }
                                        {
                                            auth &&
                                            <>
                                                <li><Link to="/" onClick={handleLogout}>Name</Link></li>
                                            </>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 social-area">
                                <div className="social-search-area text-center">
                                    <div className="social-icon socile-icon-style-2">
                                        <ul>
                                            {
                                                socialLink ? socialLink.map(link => {
                                                    return (
                                                        <li>
                                                            <a href={link.url} title={link.title}
                                                               dangerouslySetInnerHTML={{__html: link.icon}}>

                                                            </a>
                                                        </li>)
                                                    })
                                                    : ""
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 cart-area">
                                <div className="cart-currency-area login-register-area text-right">
                                    <ul>
                                        <li>
                                            <div className="header-currency">
                                                <select>
                                                    <option value="1">USD</option>
                                                    <option value="2">Pound</option>
                                                    <option value="3">Euro</option>
                                                    <option value="4">Dinar</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="header-cart">
                                                <div className="cart-icon"><a href="#">Cart<i
                                                    className="zmdi zmdi-shopping-cart"></i></a> <span>2</span></div>
                                                <div className="cart-content-wraper">
                                                    <div className="cart-single-wraper">
                                                        <div className="cart-img">
                                                            <a href="#"><img src={AppConstants.BASE_IMG_URL + "product/01.jpg"} alt=""/></a>
                                                        </div>
                                                        <div className="cart-content">
                                                            <div className="cart-name"><a href="#">Aenean Eu
                                                                Tristique</a></div>
                                                            <div className="cart-price"> $70.00</div>
                                                            <div className="cart-qty"> Qty: <span>1</span></div>
                                                        </div>
                                                        <div className="remove"><a href="#"><i
                                                            className="zmdi zmdi-close"></i></a></div>
                                                    </div>
                                                    <div className="cart-single-wraper">
                                                        <div className="cart-img">
                                                            <a href="#"><img src={AppConstants.BASE_IMG_URL + "product/02.jpg"} alt=""/></a>
                                                        </div>
                                                        <div className="cart-content">
                                                            <div className="cart-name"><a href="#">Aenean Eu
                                                                Tristique</a></div>
                                                            <div className="cart-price"> $70.00</div>
                                                            <div className="cart-qty"> Qty: <span>1</span></div>
                                                        </div>
                                                        <div className="remove"><a href="#"><i
                                                            className="zmdi zmdi-close"></i></a></div>
                                                    </div>
                                                    <div className="cart-subtotal"> Subtotal: <span>$200.00</span></div>
                                                    <div className="cart-check-btn">
                                                        <div className="view-cart"><a className="btn-def"
                                                                                      href="cart.html">View Cart</a>
                                                        </div>
                                                        <div className="check-btn"><a className="btn-def"
                                                                                      href="checkout.html">Checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuComponent/>
            </header>
    )
}

export default HeaderComponent


