import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
    return (
        <div>
            <footer className="text-center">

                <div className="container-fluid p-4">
                    <div className="container-fluid p-4" style={{ backgroundColor: "#003580" }}>

                        {/* Form section */}
                        <section className="container" style={{ color: "white", fontWeight: "lighter", fontSize: "24px" }}>
                            <form action="">
                                <div className="row d-flex justify-content-center">
                                    <div>
                                        <p>
                                            <strong>Save time, save money! <br />
                                                Sign up and we'll send the best deals to you</strong>
                                        </p>
                                    </div>

                                    <div className="col-md-5 col-12">

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="form5Example21" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-auto">

                                        <button type="submit" className="btn btn-outline-light mb-4">
                                            Subscribe
                                        </button>
                                    </div>

                                </div>

                            </form>
                        </section>

                        <div className="text-center bg-light p-3">
                            <a className="text-primary" style={{ textDecoration: "none" }} href="">ExtranetLogin</a>
                        </div>

                    </div>
                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>
                    <section className="" >

                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 4</a>
                                    </li>
                                </ul>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 4</a>
                                    </li>
                                </ul>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="">Link 4</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>

                </div>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}>
                    <a className="text-primary" style={{ textDecoration: "none" }} href="">@Footer Social media</a>
                </div>

            </footer >
        </div>
    )
}

export default Footer