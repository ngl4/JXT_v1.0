import React from "react"; 

function Navbar({RouterLinkHome, RouterLinkEnter, RouterLinkTrack}) {

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid p-0">
                    <span className="navbar-brand p-2 mx-2">{RouterLinkHome}</span>
                    <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-4 text-light" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active text-light mx-2" aria-current="page" name="enter-jobs" id="enter-jobs">{RouterLinkEnter}</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-light mx-2" name="enter-jobs" id="enter-jobs">{RouterLinkTrack}</span>
                            </li>
                            {/* Dropdown Option */}
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/track-jobs" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Track
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/track-jobs/general">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-success mx-4" type="submit">Sign On</button>
                        </form>
                    </div>
                </div>
            </nav>
    );
}; 

export default Navbar;