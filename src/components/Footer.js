import React from "react";

function Footer({ ftrData }) {
    return (
        <>
            <footer className="text-center text-lg-start  text-white ">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        {ftrData.map((item, index) => {
                            return (
                                <a key={item.id} href={item.sclink} className="me-4 text-reset" target="blank">
                                    <i className={item.iconName}></i>
                                </a>
                            )
                        })}
                        {/* <a href="https://www.facebook.com/me/" className="me-4 text-reset">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                    <i className="fab fa-google"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="#!" className="me-4 text-reset">
                    <i className="fab fa-github"></i>
                </a> */}
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Hard Accessores
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit natus recusandae dignissimos veritatis eveniet molestias hic doloremque fugiat, similique sed labore culpa esse eum voluptates? .
                                </p>
                            </div>
                            {/* <!-- Grid column -->

                    <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Categories
                                </h6>
                                <p>
                                    <a href="#!" className="">Men</a>
                                </p>
                                <p>
                                    <a href="#!" className="">Women</a>
                                </p>
                                <p>
                                    <a href="#!" className="">Accessories</a>
                                </p>
                                <p>
                                    <a href="#!" className="">Denim</a>
                                </p>
                            </div>
                            {/* <!-- Grid column -->

                    <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Information
                                </h6>
                                <p>
                                    <a href="#!" className="">About Us</a>
                                </p>
                                <p>
                                    <a href="#!" className="">Contact Us</a>
                                </p>
                                <p>
                                    <a href="#!" className="">Terms & Conditions</a>
                                </p>
                                <p>
                                    <a href="#!" className="">Privacy Policy</a>
                                </p>
                            </div>
                            {/* <!-- Grid column -->

                    <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i><a href="#!">New York, NY 10012, US</a> </p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i><a href="#!">info@example.com</a>
                                </p>
                                <p><i className="fas fa-phone me-3"></i><a href="#!"> + 01 234 567 88</a></p>
                                <p><i className="fas fa-print me-3"></i> <a href="#!">+ 01 234 567 89</a></p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  -->

        <!-- Copyright --> */}
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">hard Accessores.com</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}

export default Footer;