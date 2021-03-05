import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function LoginNavbar() {
    return (
        <>
            <div className="Navbar" style={{ height: "50px" }}>

                <div className="rightpart" style={{marginLeft:"-100px"}}>
                 &emsp;
                    <h6 className="mx-5">
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                            Login
                        </Link>
                    </h6>
                    <h6>
                        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
                            Sign UP
                        </Link>
                    </h6>
                </div>

            </div>
        </>
    )
}

export default LoginNavbar
