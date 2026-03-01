import React from "react";

const HomeComponent = () => {
    const assetDir = "src/assets/front"
    return(
        <>
            <div className="slider-area pos-rltv carosule-pagi cp-line">
                <div className="active-slider">
                    <div className="single-slider pos-rltv">
                        <div className="slider-img"><img src={assetDir + `/img/slider/slider01.jpg`} alt=""/></div>
                        <div className="slider-content pos-abs">
                            <h4>Best Collection</h4>
                            <h1 className="uppercase pos-rltv underline">exclusive Fashion 2016</h1>
                            <a href="#" className="btn-def btn-white">Shop Now</a>
                        </div>
                    </div>
                    <div className="single-slider pos-rltv">
                        <div className="slider-img"><img src={assetDir + `/img/slider/slider02.jpg`} alt=""/></div>
                        <div className="slider-content pos-abs">
                            <h4>Best Collection</h4>
                            <h1 className="uppercase pos-rltv underline">exclusive Fashion 2016</h1>
                            <a href="#" className="btn-def btn-white">Shop Now</a>
                        </div>
                    </div>
                    <div className="single-slider pos-rltv">
                        <div className="slider-img"><img src={assetDir + `/img/slider/slider01.jpg`} alt=""/></div>
                        <div className="slider-content pos-abs">
                            <h4>Best Collection</h4>
                            <h1 className="uppercase pos-rltv underline">exclusive Fashion 2016</h1>
                            <a href="#" className="btn-def btn-white">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="delivery-service-area ptb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="single-service shadow-box text-center">
                                <img src={assetDir + `/img/icons/garantee.png`} alt=""/>
                                    <h5>Money Back Guarantee</h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="single-service shadow-box text-center">
                                <img src={assetDir + `/img/icons/coupon.png`} alt=""/>
                                    <h5>Gift Coupon</h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="single-service shadow-box text-center">
                                <img src={assetDir + `/img/icons/delivery.png`} alt=""/>
                                    <h5>Free Shipping</h5>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="single-service shadow-box text-center">
                                <img src={assetDir + `/img/icons/support.png`} alt=""/>
                                    <h5>24x7 Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="branding-section-area">
                <div className="container">
                    <div className="row">
                        <div className="active-slider pos-rltv carosule-pagi cp-line pagi-02">
                            <div className="single-slider">
                                <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
                                    <div className="brand-img text-center">
                                        <img src={assetDir + `/img/team/branding.png`} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                                    <div className="brand-content ptb-55">
                                        <div className="brand-text color-lightgrey">
                                            <h6>New Fashion</h6>
                                            <h2 className="uppercase montserrat">Brand Cortta</h2>
                                            <h3 className="montserrat">$200.00</h3>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <div className="social-icon-wraper mt-35">
                                                <div className="social-icon">
                                                    <ul>
                                                        <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                        <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i></a></li>
                                                        <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                        <li><a href="#"><i className="zmdi zmdi-repeat"></i></a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brand-timer shadow-box-2 mt-50">
                                            <div className="timer-wraper text-center">
                                                <div className="timer">
                                                    <div data-countdown="2015/02/01"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slider">
                                <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
                                    <div className="brand-img text-center">
                                        <img src={assetDir + `/img/team/branding.png`} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                                    <div className="brand-content ptb-55">
                                        <div className="brand-text color-lightgrey">
                                            <h6>New Fashion</h6>
                                            <h2 className="uppercase montserrat">Brand Cortta</h2>
                                            <h3 className="montserrat">$200.00</h3>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <div className="social-icon-wraper mt-35">
                                                <div className="social-icon">
                                                    <ul>
                                                        <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                        <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i></a></li>
                                                        <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                        <li><a href="#"><i className="zmdi zmdi-repeat"></i></a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brand-timer shadow-box-2 mt-50">
                                            <div className="timer-wraper text-center">
                                                <div className="timer">
                                                    <div data-countdown="2017/02/01"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slider">
                                <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
                                    <div className="brand-img text-center">
                                        <img src={assetDir + `/img/team/branding.png`} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                                    <div className="brand-content ptb-55">
                                        <div className="brand-text color-lightgrey">
                                            <h6>New Fashion</h6>
                                            <h2 className="uppercase montserrat">Brand Cortta</h2>
                                            <h3 className="montserrat">$200.00</h3>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <div className="social-icon-wraper mt-35">
                                                <div className="social-icon">
                                                    <ul>
                                                        <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                        <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i></a></li>
                                                        <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                        <li><a href="#"><i className="zmdi zmdi-repeat"></i></a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brand-timer shadow-box-2 mt-50">
                                            <div className="timer-wraper text-center">
                                                <div className="timer">
                                                    <div data-countdown="2019/02/01"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new-arrival-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <div className="heading-title heading-style pos-rltv mb-50 text-center">
                                <h5 className="uppercase">New Arrival</h5>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                            <div className="col-md-3">
                                <div className="single-product">
                                    <div className="product-img">
                                        <div className="product-label">
                                            <div className="new">New</div>
                                        </div>
                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/01.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/02.jpg`} className="secondary-image"/> </a>
                                        </div>
                                        <div className="product-icon socile-icon-tooltip text-center">
                                            <ul>
                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                        <div className="prodcut-ratting-price">
                                            <div className="prodcut-price">
                                                <div className="new-price"> $220 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-product">
                                    <div className="product-img">
                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/03.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/04.jpg`} className="secondary-image"/> </a>
                                        </div>
                                        <div className="product-icon socile-icon-tooltip text-center">
                                            <ul>
                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                        <div className="prodcut-ratting-price">
                                            <div className="prodcut-price">
                                                <div className="new-price"> $220 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-product">
                                    <div className="product-img">
                                        <div className="product-label">
                                            <div className="new">Sale</div>
                                        </div>
                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/02.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/03.jpg`} className="secondary-image"/> </a>
                                        </div>
                                        <div className="product-icon socile-icon-tooltip text-center">
                                            <ul>
                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                        <div className="prodcut-ratting-price">
                                            <div className="prodcut-ratting">
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                            </div>
                                            <div className="prodcut-price">
                                                <div className="new-price"> $220 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-product">
                                    <div className="product-img">
                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/04.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/03.jpg`} className="secondary-image"/> </a>
                                        </div>
                                        <div className="product-icon socile-icon-tooltip text-center">
                                            <ul>
                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                        <div className="prodcut-ratting-price">
                                            <div className="prodcut-price">
                                                <div className="new-price"> $220 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-product">
                                    <div className="product-img">
                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/05.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/06.jpg`} className="secondary-image"/> </a>
                                        </div>
                                        <div className="product-icon socile-icon-tooltip text-center">
                                            <ul>
                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-text">
                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                        <div className="prodcut-ratting-price">
                                            <div className="prodcut-ratting">
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star"></i></a>
                                                <a href="#"><i className="fa fa-star-o"></i></a> </div>
                                            <div className="prodcut-price">
                                                <div className="new-price"> $220 </div>
                                                <div className="old-price"> <del>$250</del> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="single-banner gray-bg">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="sb-img text-center">
                                            <img src={assetDir + `/img/banner/02.png`} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="sb-content mt-60">
                                            <div className="banner-text">
                                                <h5 className="lato">New Arrival</h5>
                                                <h2 className="montserrat">Grag T- Shirt</h2>
                                                <h3 className="montserrat">$99.99</h3>
                                                <div className="banner-list">
                                                    <ul>
                                                        <li>Best quality</li>
                                                        <li>Best quality</li>
                                                        <li>Best quality</li>
                                                    </ul>
                                                </div>
                                                <div className="social-icon-wraper mt-25">
                                                    <div className="social-icon socile-icon-style-1">
                                                        <ul>
                                                            <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                            <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i></a></li>
                                                            <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                            <li><a href="#"><i className="zmdi zmdi-repeat"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="single-banner gray-bg">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="sb-img text-center">
                                            <img src={assetDir + `/img/banner/01.png`} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="sb-content mt-60">
                                            <div className="banner-text">
                                                <h5 className="lato">New Arrival</h5>
                                                <h2 className="montserrat">Grag T- Shirt</h2>
                                                <h3 className="montserrat">$99.99</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                <a className="btn-def btn2" href="#">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discunt-featured-onsale-area pt-60">
                <div className="container">
                    <div className="row">
                        <div className="product-area tab-cars-style">
                            <div className="title-tab-product-category">
                                <div className="col-md-12 text-center">
                                    <ul className="nav mb-40 heading-style-2" role="tablist">
                                        <li role="presentation" className="active"><a href="#newarrival" aria-controls="newarrival" role="tab" data-toggle="tab">New Arrival</a></li>
                                        <li role="presentation"><a href="#bestsellr" aria-controls="bestsellr" role="tab" data-toggle="tab">Best Seller</a></li>
                                        <li role="presentation"><a href="#specialoffer" aria-controls="specialoffer" role="tab" data-toggle="tab">Special Offer</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="content-tab-product-category">
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane fade in active" id="newarrival">
                                        <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="product-label">
                                                            <div className="new">New</div>
                                                        </div>
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/01.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/02.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/03.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/04.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="product-label">
                                                            <div className="new">Sale</div>
                                                        </div>
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/02.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/03.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-ratting">
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                                            </div>
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/04.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/03.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/05.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/06.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-ratting">
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star-o"></i></a> </div>
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                                <div className="old-price"> <del>$250</del> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane  fade in" id="bestsellr">
                                        <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="product-label">
                                                            <div className="new">New</div>
                                                        </div>
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/01.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/02.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="product-label">
                                                            <div className="new">Sale</div>
                                                        </div>
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/02.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/03.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-ratting">
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                                            </div>
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/04.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/03.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/03.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/04.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/05.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/06.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-ratting">
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star-o"></i></a> </div>
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                                <div className="old-price"> <del>$250</del> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" className="tab-pane  fade in" id="specialoffer">
                                        <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/04.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/03.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/05.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/06.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-ratting">
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star-o"></i></a> </div>
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                                <div className="old-price"> <del>$250</del> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="product-label">
                                                            <div className="new">New</div>
                                                        </div>
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/01.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/02.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/03.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/04.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="single-product">
                                                    <div className="product-img">
                                                        <div className="product-label">
                                                            <div className="new">Sale</div>
                                                        </div>
                                                        <div className="single-prodcut-img  product-overlay pos-rltv">
                                                            <a href="single-product.html"> <img alt="" src={assetDir + `/img/product/02.jpg`} className="primary-image"/> <img alt="" src={assetDir + `/img/product/03.jpg`} className="secondary-image"/> </a>
                                                        </div>
                                                        <div className="product-icon socile-icon-tooltip text-center">
                                                            <ul>
                                                                <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                                                <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                                                <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal"><i className="fa fa-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-text">
                                                        <div className="prodcut-name"> <a href="single-product.html">Quisque fringilla</a> </div>
                                                        <div className="prodcut-ratting-price">
                                                            <div className="prodcut-ratting">
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                                            </div>
                                                            <div className="prodcut-price">
                                                                <div className="new-price"> $220 </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-area overlay ptb-70 mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <div className="heading-title color-lightgrey mb-40 text-center">
                                <h5 className="uppercase">Testimonial</h5>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="total-testimonial active-slider carosule-pagi pagi-03">
                                <div className="single-testimonial">
                                    <div className="testimonial-img">
                                        <img src={assetDir + `/img/team/testi-03.jpg`} alt=""/>
                                    </div>
                                    <div className="testimonial-content color-lightgrey">
                                        <div className="name-degi pos-rltv">
                                            <h5>Anik Islam</h5>
                                            <p>Developer</p>
                                        </div>
                                        <div className="testi-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="testimonial-img">
                                        <img src={assetDir + `/img/team/testi-02.jpg`} alt=""/>
                                    </div>
                                    <div className="testimonial-content color-lightgrey">
                                        <div className="name-degi pos-rltv">
                                            <h5>Shakara Tasnim</h5>
                                            <p>Facebook Liker</p>
                                        </div>
                                        <div className="testi-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="testimonial-img">
                                        <img src={assetDir + `/img/team/testi-01.jpg`} alt=""/>
                                    </div>
                                    <div className="testimonial-content color-lightgrey">
                                        <div className="name-degi pos-rltv">
                                            <h5>Momen Buhyan</h5>
                                            <p>Designer</p>
                                        </div>
                                        <div className="testi-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrival-ratted-sale-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="heading-title heading-style pos-rltv mb-50 text-center">
                                <h5 className="uppercase">New Arrival</h5>
                            </div>
                            <div className="ctg-slider-active">
                                <div className="single-ctg new-arrival-ctg">
                                    <div className="single-ctg-item">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="product-ctg-img pos-rltv product-overlay">
                                                    <a href="single-product.html"><img src={assetDir + `/img/product/s01.jpg`} alt=""/></a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="product-ctg-content">
                                                    <p>Primo Court Mid Suede</p>
                                                    <p className="font-bold">$236.99</p>
                                                    <div className="social-icon socile-icon-style-1 mt-15">
                                                        <ul>
                                                            <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                            <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-ctg-item">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="product-ctg-img pos-rltv product-overlay">
                                                    <a href="single-product.html"><img src={assetDir + `/img/product/s02.jpg`} alt=""/></a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="product-ctg-content">
                                                    <p>Primo Court Mid Suede</p>
                                                    <p className="font-bold">$236.99</p>
                                                    <div className="social-icon socile-icon-style-1 mt-15">
                                                        <ul>
                                                            <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                            <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-ctg new-arrival-ctg">
                                    <div className="single-ctg-item">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="product-ctg-img pos-rltv product-overlay">
                                                    <a href="single-product.html"><img src={assetDir + `/img/product/s01.jpg`} alt=""/></a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="product-ctg-content">
                                                    <p>Primo Court Mid Suede</p>
                                                    <p className="font-bold">$236.99</p>
                                                    <div className="social-icon socile-icon-style-1 mt-15">
                                                        <ul>
                                                            <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                            <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-ctg-item">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="product-ctg-img pos-rltv product-overlay">
                                                    <a href="single-product.html"><img src={assetDir + `/img/product/s02.jpg`} alt=""/></a>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="product-ctg-content">
                                                    <p>Primo Court Mid Suede</p>
                                                    <p className="font-bold">$236.99</p>
                                                    <div className="social-icon socile-icon-style-1 mt-15">
                                                        <ul>
                                                            <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                            <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="single-ctg on-sale-ctg">
                                <div className="heading-title heading-style pos-rltv mb-50 text-center">
                                    <h5 className="uppercase">On Sale</h5>
                                </div>
                                <div className="ctg-slider-active">
                                    <div className="single-ctg new-arrival-ctg">
                                        <div className="single-ctg-item">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-img pos-rltv product-overlay">
                                                        <a href="single-product.html"><img src={assetDir + `/img/product/s01.jpg`} alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-content">
                                                        <p>Primo Court Mid Suede</p>
                                                        <p className="font-bold">$236.99</p>
                                                        <div className="social-icon socile-icon-style-1 mt-15">
                                                            <ul>
                                                                <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-ctg-item">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-img pos-rltv product-overlay">
                                                        <a href="single-product.html"><img src={assetDir + `/img/product/s02.jpg`} alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-content">
                                                        <p>Primo Court Mid Suede</p>
                                                        <p className="font-bold">$236.99</p>
                                                        <div className="social-icon socile-icon-style-1 mt-15">
                                                            <ul>
                                                                <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-ctg new-arrival-ctg">
                                        <div className="single-ctg-item">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-img pos-rltv product-overlay">
                                                        <a href="single-product.html"><img src={assetDir + `/img/product/s01.jpg`} alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-content">
                                                        <p>Primo Court Mid Suede</p>
                                                        <p className="font-bold">$236.99</p>
                                                        <div className="social-icon socile-icon-style-1 mt-15">
                                                            <ul>
                                                                <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-ctg-item">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-img pos-rltv product-overlay">
                                                        <a href="single-product.html"><img src={assetDir + `/img/product/s02.jpg`} alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-content">
                                                        <p>Primo Court Mid Suede</p>
                                                        <p className="font-bold">$236.99</p>
                                                        <div className="social-icon socile-icon-style-1 mt-15">
                                                            <ul>
                                                                <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
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
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="single-ctg top-rated-ctg">
                                <div className="heading-title heading-style pos-rltv mb-50 text-center">
                                    <h5 className="uppercase">Top Rated</h5>
                                </div>
                                <div className="ctg-slider-active">
                                    <div className="single-ctg new-arrival-ctg">
                                        <div className="single-ctg-item">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-img pos-rltv product-overlay">
                                                        <a href="single-product.html"><img src={assetDir + `/img/product/s01.jpg`} alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-content">
                                                        <p>Primo Court Mid Suede</p>
                                                        <p className="font-bold">$236.99</p>
                                                        <div className="social-icon socile-icon-style-1 mt-15">
                                                            <ul>
                                                                <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-ctg-item">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-img pos-rltv product-overlay">
                                                        <a href="single-product.html"><img src={assetDir + `/img/product/s02.jpg`} alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-content">
                                                        <p>Primo Court Mid Suede</p>
                                                        <p className="font-bold">$236.99</p>
                                                        <div className="social-icon socile-icon-style-1 mt-15">
                                                            <ul>
                                                                <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-ctg new-arrival-ctg">
                                        <div className="single-ctg-item">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-img pos-rltv product-overlay">
                                                        <a href="single-product.html"><img src={assetDir + `/img/product/s01.jpg`} alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-content">
                                                        <p>Primo Court Mid Suede</p>
                                                        <p className="font-bold">$236.99</p>
                                                        <div className="social-icon socile-icon-style-1 mt-15">
                                                            <ul>
                                                                <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-ctg-item">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-img pos-rltv product-overlay">
                                                        <a href="single-product.html"><img src={assetDir + `/img/product/s02.jpg`} alt=""/></a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="product-ctg-content">
                                                        <p>Primo Court Mid Suede</p>
                                                        <p className="font-bold">$236.99</p>
                                                        <div className="social-icon socile-icon-style-1 mt-15">
                                                            <ul>
                                                                <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                                                <li><a href="#" data-tooltip="Quick View" className="q-view" data-toggle="modal" data-target=".modal" tabindex="0"><i className="zmdi zmdi-eye"></i></a></li>
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
                    </div>
                </div>
            </div>
            <div className="brand-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="total-brand">
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/01.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/02.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/03.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/04.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/05.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/06.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/01.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/02.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/03.png`} alt=""/></a></div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-brand shadow-box"><a href="#"><img src={assetDir + `/img/brand/04.png`} alt=""/></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <div className="heading-title heading-style pos-rltv mb-50 text-center">
                                <h5 className="uppercase">Blog</h5>
                            </div>
                        </div>
                        <div className="total-blog">
                            <div className="col-md-4">
                                <div className="single-blog">
                                    <div className="blog-img pos-rltv product-overlay">
                                        <a href="#"><img src={assetDir + `/img/blog/01.jpg`} alt=""/></a>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-title">
                                            <h5 className="uppercase font-bold"><a href="#">New fashion collection 2016</a></h5>
                                            <div className="like-comments-date">
                                                <ul>
                                                    <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i>13 Like</a></li>
                                                    <li><a href="#"><i className="zmdi zmdi-comment-outline"></i>03 Comments</a></li>
                                                    <li className="blog-date"><a href="#"><i className="zmdi zmdi-calendar-alt"></i>16 jun 2016</a></li>
                                                </ul>
                                            </div>
                                            <div className="blog-text">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
                                            </div>
                                            <a className="read-more montserrat" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-blog">
                                    <div className="blog-img pos-rltv product-overlay">
                                        <a href="#"><img src={assetDir + `/img/blog/02.jpg`} alt=""/></a>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-title">
                                            <h5 className="uppercase font-bold"><a href="#">New fashion collection 2016</a></h5>
                                            <div className="like-comments-date">
                                                <ul>
                                                    <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i>13 Like</a></li>
                                                    <li><a href="#"><i className="zmdi zmdi-comment-outline"></i>03 Comments</a></li>
                                                    <li className="blog-date"><a href="#"><i className="zmdi zmdi-calendar-alt"></i>16 jun 2016</a></li>
                                                </ul>
                                            </div>
                                            <div className="blog-text">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
                                            </div>
                                            <a className="read-more montserrat" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-blog">
                                    <div className="blog-img pos-rltv product-overlay">
                                        <a href="#"><img src={assetDir + `/img/blog/03.jpg`} alt=""/></a>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-title">
                                            <h5 className="uppercase font-bold"><a href="#">New fashion collection 2016</a></h5>
                                            <div className="like-comments-date">
                                                <ul>
                                                    <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i>13 Like</a></li>
                                                    <li><a href="#"><i className="zmdi zmdi-comment-outline"></i>03 Comments</a></li>
                                                    <li className="blog-date"><a href="#"><i className="zmdi zmdi-calendar-alt"></i>16 jun 2016</a></li>
                                                </ul>
                                            </div>
                                            <div className="blog-text">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
                                            </div>
                                            <a className="read-more montserrat" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-blog">
                                    <div className="blog-img pos-rltv product-overlay">
                                        <a href="#"><img src={assetDir + `/img/blog/01.jpg`} alt=""/></a>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-title">
                                            <h5 className="uppercase font-bold"><a href="#">New fashion collection 2016</a></h5>
                                            <div className="like-comments-date">
                                                <ul>
                                                    <li><a href="#"><i className="zmdi zmdi-favorite-outline"></i>13 Like</a></li>
                                                    <li><a href="#"><i className="zmdi zmdi-comment-outline"></i>03 Comments</a></li>
                                                    <li className="blog-date"><a href="#"><i className="zmdi zmdi-calendar-alt"></i>16 jun 2016</a></li>
                                                </ul>
                                            </div>
                                            <div className="blog-text">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
                                            </div>
                                            <a className="read-more montserrat" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeComponent
