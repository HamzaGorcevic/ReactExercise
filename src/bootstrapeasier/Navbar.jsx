import React from "react";


function Navbar() {
    return (
        <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
            <div className="container-fluid py-2">
                
                <a href="#" className="navbar-brand ">
                    Hamza
                    <span className="text-warning" style={{position:'relative',bottom:'1px'}}><i class="bi bi-person"></i></span>
                    </a>

                <button className="navbar-toggler" type="button" data-toggle ='collapse' data-target ="#NavShort">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="NavShort">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Freatures
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link btn btn-warning" style={{width:100}} type="button">
                                Start
                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;