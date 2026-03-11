import {AppConstants} from "../../utils/AppConstants";
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return(
        <div id="sticky-header" className="header-middle-area">
            <div className="container">
                <div className="full-width-mega-dropdown">
                    <div className="row">
                        <div className="col-md-2 col-sm-2">
                            <div className="logo ptb-20"><a href="/"> <img src={AppConstants.BASE_IMG_URL + "logo/logo.png"}
                                                                           alt="main logo"/></a></div>
                        </div>
                        <div className="col-md-7 col-sm-10 hidden-xs">
                            <nav id="primary-menu">
                                <ul className="main-menu">
                                    <li className="current"><Link className="active" to='/'>Home</Link>
                                        <ul className="dropdown">
                                            <li><a className="active" href="index.html">Home One</a></li>
                                            <li><a href="index-2.html">Home Two</a></li>
                                            <li><a href="index-boxed-01.html">Home Three (Boxed)</a></li>
                                            <li><a href="index-boxed-02.html">Home Four (Boxed)</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-parent pos-rltv"><a href="shop.html">Man</a>
                                        <div className="mega-menu-area mma-800">
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">Shirts</li>
                                                <li><a href="shop.html">Shirt 01</a></li>
                                                <li><a href="shop.html">Shirt 02</a></li>
                                                <li><a href="shop.html">Shirt 03</a></li>
                                                <li><a href="shop.html">Shirt 04</a></li>
                                            </ul>
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">Pants</li>
                                                <li><a href="shop.html">Pant 01</a></li>
                                                <li><a href="shop.html">Pant 02</a></li>
                                                <li><a href="shop.html">Pant 03</a></li>
                                                <li><a href="shop.html">Pant 04</a></li>
                                            </ul>
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">T-Shirts</li>
                                                <li><a href="shop.html">T-Shirt 01</a></li>
                                                <li><a href="shop.html">T-Shirt 02</a></li>
                                                <li><a href="shop.html">T-Shirt 03</a></li>
                                                <li><a href="shop.html">T-Shirt 04</a></li>
                                            </ul>
                                            <div className="mega-banner-img">
                                                <a href="single-product.html"><img
                                                    src="images/banner/banner-fashion-02.jpg" alt=""/></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mega-parent pos-rltv"><a href="shop.html">Women</a>
                                        <div className="mega-menu-area mma-700">
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">Sharees</li>
                                                <li><a href="shop.html">Sharee 01</a></li>
                                                <li><a href="shop.html">Sharee 02</a></li>
                                                <li><a href="shop.html">Sharee 03</a></li>
                                                <li><a href="shop.html">Sharee 04</a></li>
                                                <li><a href="shop.html">Sharee 05</a></li>
                                            </ul>
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">Lahenga</li>
                                                <li><a href="shop.html">Lahenga 01</a></li>
                                                <li><a href="shop.html">Lahenga 02</a></li>
                                                <li><a href="shop.html">Lahenga 03</a></li>
                                                <li><a href="shop.html">Lahenga 04</a></li>
                                                <li><a href="shop.html">Lahenga 05</a></li>
                                            </ul>
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">Sandels</li>
                                                <li><a href="shop.html">Sandel 01</a></li>
                                                <li><a href="shop.html">Sandel 02</a></li>
                                                <li><a href="shop.html">Sandel 03</a></li>
                                                <li><a href="shop.html">Sandel 04</a></li>
                                                <li><a href="shop.html">Sandel 05</a></li>
                                            </ul>
                                            <div className="mega-banner-img">
                                                <a href="single-product.html"><img
                                                    src="images/banner/banner-fashion.jpg" alt=""/></a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mega-parent"><a href="shop.html">Shortcut</a>
                                        <div className="mega-menu-area mma-970">
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">Shortcode-01</li>
                                                <li><a href="shortcode-banner.html"
                                                       target="_blank">shortcode-banner</a></li>
                                                <li><a href="shortcode-best-top-on-sale-slider.html"
                                                       target="_blank">too-on-sale</a></li>
                                                <li><a href="shortcode-blog-item.html" target="_blank">Short
                                                    Blog Item</a></li>
                                                <li><a href="shortcode-brand-prodcut.html" target="_blank">Brand
                                                    Product</a></li>
                                                <li><a href="shortcode-brand-slider.html" target="_blank">Brand
                                                    Slider</a></li>
                                            </ul>
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">Shortcode-02</li>
                                                <li><a href="shortcode-breadcrumb.html"
                                                       target="_blank">Breadcrumb</a></li>
                                                <li><a href="shortcode-related-product.html" target="_blank">Related
                                                    Product</a></li>
                                                <li><a href="shortcode-service.html" target="_blank">Service</a>
                                                </li>
                                                <li><a href="shortcode-skill.html" target="_blank">Skill</a>
                                                </li>
                                                <li><a href="shortcode-slider.html" target="_blank">Slider</a>
                                                </li>
                                            </ul>
                                            <ul className="single-mega-item">
                                                <li className="menu-title uppercase">Shortcode-03</li>
                                                <li><a href="shortcode-team.html" target="_blank">Team</a></li>
                                                <li><a href="shortcode-testimonial.html"
                                                       target="_blank">Testimonial</a></li>
                                                <li><a href="shortcode-why-choose-us.html" target="_blank">Why
                                                    Choose Us</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="mega-parent"><a href="index.html">Pages</a>
                                        <div className="mega-menu-area mma-970">
                                            <ul className="single-mega-item coloum-4">
                                                <li className="menu-title uppercase">Pages-01</li>
                                                <li><a href="about-us.html" target="_blank">About-us</a></li>
                                                <li><a href="blog.html" target="_blank">Blog</a></li>
                                                <li><a href="blog-right.html" target="_blank">Blog-Right</a>
                                                </li>
                                                <li><a href="single-blog.html" target="_blank">Single Blog</a>
                                                </li>
                                                <li><a href="single-blog-right.html" target="_blank">Single Blog
                                                    Right</a></li>
                                                <li><a href="blog-full.html" target="_blank">Blog-Fullwidth</a>
                                                </li>
                                            </ul>
                                            <ul className="single-mega-item coloum-4">
                                                <li className="menu-title uppercase">pages-02</li>
                                                <li><a href="blog-full-right.html" target="_blank">Blog Ful
                                                    Rightl</a></li>
                                                <li><a href="cart.html" target="_blank">Cart</a></li>
                                                <li><a href="checkout.html" target="_blank">Checkout</a></li>
                                                <li><a href="compare.html" target="_blank">Compare</a></li>
                                                <li><a href="complete-order.html" target="_blank">Complete
                                                    Order</a></li>
                                                <li><a href="contact-us.html" target="_blank">Contact US</a>
                                                </li>
                                            </ul>
                                            <ul className="single-mega-item coloum-4">
                                                <li className="menu-title uppercase">pages-03</li>
                                                <li><a href="login.html" target="_blank">Login</a></li>
                                                <li><a href="my-account.html" target="_blank">My Account</a>
                                                </li>
                                                <li><a href="shop-full-grid.html" target="_blank">Shop Full
                                                    Grid</a></li>
                                                <li><a href="shop-full-list.html" target="_blank">Shop Full
                                                    List</a></li>
                                                <li><a href="shop-list-right-sidebar.html" target="_blank">Shop
                                                    List Right</a></li>
                                                <li><a href="shop-list.html" target="_blank">Shop List</a></li>
                                            </ul>
                                            <ul className="single-mega-item coloum-4">
                                                <li className="menu-title uppercase">pages-03</li>
                                                <li><a href="shop-right-sidebar.html" target="_blank">Shop
                                                    Right</a></li>
                                                <li><a href="shop.html" target="_blank">Shop</a></li>
                                                <li><a href="single-product.html" target="_blank">Single
                                                    Prodcut</a></li>
                                                <li><a href="wishlist.html" target="_blank">Wishlist</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="blog.html">BLOG</a></li>
                                    <li><a href="about-us.html">ABOUT</a></li>
                                </ul>
                            </nav>
                        </div>
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
                        <div className="mobile-menu-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <nav id="dropdown">
                                            <ul>
                                                <li><a href="index.html">Home</a>
                                                    <ul>
                                                        <li><a className="active" href="index.html">Home One</a>
                                                        </li>
                                                        <li><a href="index-2.html">Home Two</a></li>
                                                        <li><a href="index-boxed-01.html">Home Three (Boxed)</a>
                                                        </li>
                                                        <li><a href="index-boxed-02.html">Home Four (Boxed)</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Man</a>
                                                    <ul className="single-mega-item">
                                                        <li><a href="shop.html">Shirt 01</a></li>
                                                        <li><a href="shop.html">Shirt 02</a></li>
                                                        <li><a href="shop.html">Shirt 03</a></li>
                                                        <li><a href="shop.html">Shirt 04</a></li>
                                                        <li><a href="shop.html">Pant 01</a></li>
                                                        <li><a href="shop.html">Pant 02</a></li>
                                                        <li><a href="shop.html">Pant 03</a></li>
                                                        <li><a href="shop.html">Pant 04</a></li>
                                                        <li><a href="shop.html">T-Shirt 01</a></li>
                                                        <li><a href="shop.html">T-Shirt 02</a></li>
                                                        <li><a href="shop.html">T-Shirt 03</a></li>
                                                        <li><a href="shop.html">T-Shirt 04</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Shop</a>
                                                    <ul className="single-mega-item">
                                                        <li><a href="shop.html">Sharee 01</a></li>
                                                        <li><a href="shop.html">Sharee 02</a></li>
                                                        <li><a href="shop.html">Sharee 03</a></li>
                                                        <li><a href="shop.html">Sharee 04</a></li>
                                                        <li><a href="shop.html">Sharee 05</a></li>
                                                        <li><a href="shop.html">Lahenga 01</a></li>
                                                        <li><a href="shop.html">Lahenga 02</a></li>
                                                        <li><a href="shop.html">Lahenga 03</a></li>
                                                        <li><a href="shop.html">Lahenga 04</a></li>
                                                        <li><a href="shop.html">Lahenga 05</a></li>
                                                        <li><a href="shop.html">Sandel 01</a></li>
                                                        <li><a href="shop.html">Sandel 02</a></li>
                                                        <li><a href="shop.html">Sandel 03</a></li>
                                                        <li><a href="shop.html">Sandel 04</a></li>
                                                        <li><a href="shop.html">Sandel 05</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Shortcode</a>
                                                    <ul className="single-mega-item">
                                                        <li><a href="shortcode-banner.html"
                                                               target="_blank">shortcode-banner</a></li>
                                                        <li><a href="shortcode-best-top-on-sale-slider.html"
                                                               target="_blank">too-on-sale</a></li>
                                                        <li><a href="shortcode-blog-item.html" target="_blank">Short
                                                            Blog Item</a></li>
                                                        <li><a href="shortcode-brand-prodcut.html"
                                                               target="_blank">Brand Product</a></li>
                                                        <li><a href="shortcode-brand-slider.html"
                                                               target="_blank">Brand Slider</a></li>

                                                        <li><a href="shortcode-breadcrumb.html"
                                                               target="_blank">Breadcrumb</a></li>
                                                        <li><a href="shortcode-related-product.html"
                                                               target="_blank">Related Product</a></li>
                                                        <li><a href="shortcode-service.html"
                                                               target="_blank">Service</a></li>
                                                        <li><a href="shortcode-skill.html"
                                                               target="_blank">Skill</a></li>
                                                        <li><a href="shortcode-slider.html"
                                                               target="_blank">Slider</a></li>

                                                        <li><a href="shortcode-team.html"
                                                               target="_blank">Team</a></li>
                                                        <li><a href="shortcode-testimonial.html"
                                                               target="_blank">Testimonial</a></li>
                                                        <li><a href="shortcode-why-choose-us.html"
                                                               target="_blank">Why Choose Us</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Pages</a>
                                                    <ul className="single-mega-item coloum-4">
                                                        <li><a href="about-us.html" target="_blank">About-us</a>
                                                        </li>
                                                        <li><a href="blog.html" target="_blank">Blog</a></li>
                                                        <li><a href="blog-right.html"
                                                               target="_blank">Blog-Right</a></li>
                                                        <li><a href="single-blog.html" target="_blank">Single
                                                            Blog</a></li>
                                                        <li><a href="single-blog-right.html" target="_blank">Single
                                                            Blog Right</a></li>
                                                        <li><a href="blog-full.html"
                                                               target="_blank">Blog-Fullwidth</a></li>
                                                        <li className="menu-title uppercase">pages-02</li>
                                                        <li><a href="blog-full-right.html" target="_blank">Blog
                                                            Ful Rightl</a></li>
                                                        <li><a href="cart.html" target="_blank">Cart</a></li>
                                                        <li><a href="checkout.html" target="_blank">Checkout</a>
                                                        </li>
                                                        <li><a href="compare.html" target="_blank">Compare</a>
                                                        </li>
                                                        <li><a href="complete-order.html" target="_blank">Complete
                                                            Order</a></li>
                                                        <li><a href="contact-us.html" target="_blank">Contact
                                                            US</a></li>
                                                        <li className="menu-title uppercase">pages-03</li>
                                                        <li><a href="login.html" target="_blank">Login</a></li>
                                                        <li><a href="my-account.html" target="_blank">My
                                                            Account</a></li>
                                                        <li><a href="shop-full-grid.html" target="_blank">Shop
                                                            Full Grid</a></li>
                                                        <li><a href="shop-full-list.html" target="_blank">Shop
                                                            Full List</a></li>
                                                        <li><a href="shop-list-right-sidebar.html"
                                                               target="_blank">Shop List Right</a></li>
                                                        <li><a href="shop-list.html" target="_blank">Shop
                                                            List</a></li>
                                                        <li className="menu-title uppercase">pages-03</li>
                                                        <li><a href="shop-right-sidebar.html" target="_blank">Shop
                                                            Right</a></li>
                                                        <li><a href="shop.html" target="_blank">Shop</a></li>
                                                        <li><a href="single-product.html" target="_blank">Single
                                                            Prodcut</a></li>
                                                        <li><a href="wishlist.html" target="_blank">Wishlist</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="about-us.html">about</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuComponent;

