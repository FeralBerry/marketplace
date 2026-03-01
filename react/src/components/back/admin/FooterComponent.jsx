import React from "react";
const FooterComponent = () => {
    const assetDir = "src/assets/front"
    return(
        <>
            <div className="footer-area ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                            <div className="single-footer contact-us">
                                <div className="footer-title uppercase">
                                    <h5>Contact US</h5>
                                </div>
                                <ul>
                                    <li>
                                        <div className="contact-icon"><i className="zmdi zmdi-pin-drop"></i></div>
                                        <div className="contact-text">
                                            <p><span>777/a  Seventh Street,</span> <span>Rampura, Bonosri</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icon"><i className="zmdi zmdi-email-open"></i></div>
                                        <div className="contact-text">
                                            <p><span><a href="#">company@gmail.com</a></span> <span><a
                                                href="#">admin@devitems.com</a></span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icon"><i className="zmdi zmdi-phone-paused"></i></div>
                                        <div className="contact-text">
                                            <p><span>+11 (019) 25184203</span> <span>+11 (018) 50950555</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                            <div className="single-footer informaton-area">
                                <div className="footer-title uppercase">
                                    <h5>Information</h5></div>
                                <div className="informatoin">
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Order History</a></li>
                                        <li><a href="#">Wishlist</a></li>
                                        <li><a href="#">Returnes</a></li>
                                        <li><a href="#">Private Policy</a></li>
                                        <li><a href="#">Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 hidden-sm col-xs-12">
                            <div className="single-footer instagrm-area">
                                <div className="footer-title uppercase">
                                    <h5>InstaGram</h5>
                                </div>
                                <div className="instagrm">
                                    <ul>
                                        <li><a href="#"><img src={assetDir + `/img/gallery/01.jpg`} alt=""/></a></li>
                                        <li><a href="#"><img src={assetDir + `/img/gallery/02.jpg`} alt=""/></a></li>
                                        <li><a href="#"><img src={assetDir + `/img/gallery/03.jpg`} alt=""/></a></li>
                                        <li><a href="#"><img src={assetDir + `/img/gallery/04.jpg`} alt=""/></a></li>
                                        <li><a href="#"><img src={assetDir + `/img/gallery/05.jpg`} alt=""/></a></li>
                                        <li><a href="#"><img src={assetDir + `/img/gallery/06.jpg`} alt=""/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-lg-offset-1 col-xs-12">
                            <div className="single-footer newslatter-area">
                                <div className="footer-title uppercase">
                                    <h5>Get Newsletters</h5>
                                </div>
                                <div className="newslatter">
                                    <form action="#" method="post">
                                        <div className="input-box pos-rltv">
                                            <input placeholder="Type Your Email hear" type="text"/>
                                            <a href="#">
                                                <i className="zmdi zmdi-arrow-right"></i>
                                            </a>

                                        </div>
                                    </form>
                                    <div className="social-icon socile-icon-style-3 mt-40">
                                        <div className="footer-title uppercase">
                                            <h5>Social Network</h5>
                                        </div>
                                        <ul>
                                            <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-linkedin"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-pinterest"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-google"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom global-table">
                <div className="global-row">
                    <div className="global-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="copyrigth"> Copyright @
                                        <a href="https://web-site.tech">Web-site.tech</a> All right reserved
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <ul className="payment-support text-right">
                                        <li>
                                            <a href="#"><img src={assetDir + `/img/icons/pay1.png`} alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={assetDir + `/img/icons/pay2.png`} alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={assetDir + `/img/icons/pay3.png`} alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={assetDir + `/img/icons/pay4.png`} alt=""/></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={assetDir + `/img/icons/pay5.png`} alt=""/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="quickview-wrapper">
                <div className="modal fade" id="productModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-product">
                                    <div className="product-images">
                                        <div className="portfolio-thumbnil-area-2">
                                            <div className="tab-content active-portfolio-area-2">
                                                <div role="tabpanel" className="tab-pane active" id="view1">
                                                    <div className="product-img">
                                                        <a href="#"><img src={assetDir + `/img/product/01.jpg`}
                                                                         alt="Single portfolio"/></a>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="view2">
                                                    <div className="product-img">
                                                        <a href="#"><img src={assetDir + `/img/product/02.jpg`}
                                                                         alt="Single portfolio"/></a>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="view3">
                                                    <div className="product-img">
                                                        <a href="#"><img src={assetDir + `/img/product/03.jpg`}
                                                                         alt="Single portfolio"/></a>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="view4">
                                                    <div className="product-img">
                                                        <a href="#"><img src={assetDir + `/img/product/04.jpg`}
                                                                         alt="Single portfolio"/></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-more-views-2">
                                                <div className="thumbnail-carousel-modal-2" data-tabs="tabs">
                                                    <a href="#view1" aria-controls="view1" data-toggle="tab"><img
                                                        src={assetDir + `/img/product/01.jpg`} alt=""/></a>
                                                    <a href="#view2" aria-controls="view2" data-toggle="tab"><img
                                                        src={assetDir + `/img/product/02.jpg`} alt=""/></a>
                                                    <a href="#view3" aria-controls="view3" data-toggle="tab"><img
                                                        src={assetDir + `/img/product/03.jpg`} alt=""/></a>
                                                    <a href="#view4" aria-controls="view4" data-toggle="tab"><img
                                                        src={assetDir + `/img/product/04.jpg`} alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h1>Aenean eu tristique</h1>
                                        <div className="price-box-3">
                                            <div className="s-price-box"><span className="new-price">$160.00</span>
                                                <span className="old-price">$190.00</span></div>
                                        </div>
                                        <a href="shop.html" className="see-all">See all features</a>
                                        <div className="quick-add-to-cart">
                                            <form method="post" className="cart">
                                                <div className="numbers-row">
                                                    <input type="number" id="french-hens" value="3" min="1"></input>
                                                </div>
                                                <button className="single_add_to_cart_button" type="submit">Add to
                                                    cart
                                                </button>
                                            </form>
                                        </div>
                                        <div className="quick-desc"> Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Nam fringilla augue nec est tristique auctor. Donec non est at
                                            libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                            fringilla augue nec est tristique auctor. Donec non est at libero.Nam
                                            fringilla tristique auctor.
                                        </div>
                                        <div className="social-sharing-modal">
                                            <div className="widget widget_socialsharing_widget">
                                                <h3 className="widget-title-modal">Share this product</h3>
                                                <ul className="social-icons-modal">
                                                    <li><a target="_blank" title="Facebook" href="#"
                                                           className="facebook m-single-icon"><i
                                                        className="fa fa-facebook"></i></a></li>
                                                    <li><a target="_blank" title="Twitter" href="#"
                                                           className="twitter m-single-icon"><i
                                                        className="fa fa-twitter"></i></a></li>
                                                    <li><a target="_blank" title="Pinterest" href="#"
                                                           className="pinterest m-single-icon"><i
                                                        className="fa fa-pinterest"></i></a></li>
                                                    <li><a target="_blank" title="Google +" href="#"
                                                           className="gplus m-single-icon"><i
                                                        className="fa fa-google-plus"></i></a></li>
                                                    <li><a target="_blank" title="LinkedIn" href="#"
                                                           className="linkedin m-single-icon"><i
                                                        className="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src={assetDir + `/js/vendor/jquery-1.12.0.min.js`}></script>
            <script src={assetDir + `js/bootstrap.min.js`}></script>
            <script src={assetDir + `js/slider/jquery.nivo.slider.pack.js`}></script>
            <script src={assetDir + `js/slider/nivo-active.js`}></script>
            <script src={assetDir + `js/jquery.countdown.min.js`}></script>
            <script src={assetDir + `js/plugins.js`}></script>
            <script src={assetDir + `js/main.js`}></script>
        </>
    )
}
export default FooterComponent