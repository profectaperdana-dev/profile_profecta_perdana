import React from "react";

export default Navbar;
function Navbar () {

    return (
        <React.Fragment>
        {/* Loader */}
        <div className="loader">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* navbar */}

        <div className="navbar-area fixed-top">
            <div className="mobile-nav">
                <a href="index.html" className="logo">
                    <img src="assets/img/logo.png" alt="Logo"/>
                </a>
            </div>

            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" alt="Logo"/>
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle active">Home</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Home Page One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-2.html" className="nav-link">Home Page Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-3.html" className="nav-link active">Home Page Three</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="about.html" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Services</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="service.html" className="nav-link">Service</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="service-details.html" className="nav-link">Service Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="pricing.html" className="nav-link">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="blog.html" className="nav-link">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog-details.html" className="nav-link">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="shop.html" className="nav-link">Shop</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="shop-details.html" className="nav-link">Shop Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="cart.html" className="nav-link">Cart</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="checkout.html" className="nav-link">Checkout</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="sign-up.html" className="nav-link">Sign Up</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="sign-in.html" className="nav-link">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="engineer.html" className="nav-link">Engineer</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="testimonial.html" className="nav-link">Testimonial</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="faq.html" className="nav-link">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="terms-and-conditions.html" className="nav-link">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="cmn-btn">
                            <a className="banner-btn-left" href="sign-in.html">
                                <i className='bx bxs-user-plus'></i>
                                Sign In
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}