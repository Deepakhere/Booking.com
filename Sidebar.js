import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Sidebar() {
    return (
        <div className='container' style={{ marginTop: "20px", }}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{}}>
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">india</a></li>
                    <li className="breadcrumb-item active">Mp</li>
                    <li className="breadcrumb-item active">Bhopal</li>
                </ol>
            </nav>
            <nav className="col-md-3 bg-light d-none d-md-block sidebar">
                <div className="sidebar-sticky">
                    <div id="map-container-google-2" className="z-depth-1-half map-container" >
                        <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                            style={{ borderRadius: "4px", width: "278px" }} allowfullscreen></iframe>
                    </div>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Filter By: </span></h6>
                    <hr />
                    <div style={{ paddingLeft: "20px" }}>
                        <span style={{ fontSize: "16px", fontWeight: "bold" }}> Your budget (per night)</span>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckChecked">Set your own budget</label>
                        </div>
                        <div className="flex-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                0 - 5000
                            </label>
                            <div className="flex-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    5000 - 10k
                                </label>
                                <div className="flex-check"></div>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    10k - 20k
                                </label></div>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                10k - 20k
                            </label>
                        </div>
                    </div>



                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span></h6>
                    <hr />
                    <div style={{paddingLeft:"20px"}}>
                        <div className="flex-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                0 - 5000
                            </label>
                            <div className="flex-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    5000 - 10k
                                </label>
                                <div className="flex-check"></div>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    10k - 20k
                                </label></div>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                10k - 20k
                            </label>
                        </div>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Sidebar