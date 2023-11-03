import { useNavigate } from 'react-router-dom'
import './navbar.css'
import React from 'react';

const Navbar = () => {
    const navigate = useNavigate();

    function handleNavigation(route) {
        if (route === "Landing") {
            navigate("/Landing");
        } else if (route === "Service") {
            navigate("/Service");
        } else if (route === "AboutUs") {
            navigate("/AboutUs");
        } else if (route === "ChatAI") {
            navigate("/ChatAI");
        } else if (route === "Login") {
            navigate("/Login");
        } else {
        }
    }


    return(
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
                <a className="navbar-brand" href="#" style={{ color: 'white' }}>
                <b>ZetShoes</b>
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
                    <li className="nav-item">
                        <a className="nav-link" href="" onClick={() => handleNavigation("Landing")} style={{ color: 'white' }}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=""  onClick={() => handleNavigation("AboutUs")} style={{ color: 'white' }}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="" onClick={() => handleNavigation("Service")} style={{ color: 'white' }}>
                            Service
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="" onClick={() => handleNavigation("ChatAI")} style={{ color: 'white' }}>
                            ChatAI
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="" onClick={() => handleNavigation("Login")} style={{ color: 'white' }}>
                            Login
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar