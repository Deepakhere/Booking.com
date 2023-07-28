import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { flag } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div>
            <div className="header" style={{ backgroundColor: "#003580", height: "10rem" }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#003580" }}>
                        <a className="navbar-brand" style={{ fontWeight: "bold", color: "White" }} href="#">Booking.com</a>
                        <div className="collapse navbar-collapse d-flex justify-content-end">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" style={{ color: "White", fontWeight: "bold", fontSize: "14px" }} href="#">IND </a>
                                <a className="nav-item nav-link" style={{ color: "White", fontWeight: "bold", fontSize: "14px" }} href="#">List Your Property</a>
                                <form className="form-inline">
                                    <button className="btn btn-light my-sm-0 text-primary" type="register" style={{ borderRadius: "0" }}>Register</button>
                                    <button className="btn btn-light mx-2 my-sm-0 text-primary" type="submit" style={{ borderRadius: "0" }}>Login</button>
                                </form>
                            </div>
                        </div>
                    </nav>

                    {/* 2nd nav */}

                    <nav className="navbar navbar-expand-lg" >
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#" style={{ color: "white", border: "1px solid white", borderRadius: "30px", paddingRight: "20px", paddingLeft: "20px", marginRight: "30px" }}>Stay</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "white", marginRight: "30px" }}>Flight</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "white", marginRight: "30px" }}>car Rental</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#" style={{ color: "white", marginRight: "30px" }}>Airpot taxis</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className='input-field'>
                        <div className="input-box d-flex">
                            <div className="input-data">
                                <input type='text' className="data-in" placeholder="Where are you going?" value="" />
                            </div>
                            <div className="input-data">
                                <input type='text' className="data-in" placeholder="Where are you going?" value="" />
                            </div>
                            <div className="input-data">
                                <input type='text' className="data-in" placeholder="Where are you going?" value="" />
                            </div>
                            <div className="input-data">
                                <button className="btn btn-primary btn-lg" type="submit" style={{ width: "50%" }}>Search</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar