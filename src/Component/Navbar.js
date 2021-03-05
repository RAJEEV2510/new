import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className="sidebar-icon" onClick={() => {

                let x = document.getElementById('sidebar');
                if (!x.classList.contains("sidebar-menuopen")) {
                    x.classList.remove("sidebar-menuclose")
                    x.classList.add("sidebar-menuopen")
                }

            }} >
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="sidebar-menu" id="sidebar">
                <div className="home">
                 <Link to="/home/selectExercise" style={{color:"white",textDecoration:"none"}} >   home</Link>
                <div className="closesidebar">

                        <i class="fa fa-close" onClick={() => {

                            let x = document.getElementById('sidebar');
                            if (!x.classList.contains("sidebar-menuclose")) {
                                x.classList.remove("sidebar-menuopen")
                                x.classList.add("sidebar-menuclose")
                            }

                        }} ></i>
                    </div>
                </div>
                <div className="progresss">
                    progress
                </div>
                <div className="todayplan">
                  <Link to="/" style={{color:"white",textDecoration:"none"}}>  Today's Plan</Link>
                </div>
                <div className="myplan">
                  <Link to="/plan" style={{color:"white",textDecoration:"none"}}>  My plan</Link>
                </div>



            </div>

            <div className="Navbar" style={{ height: "50px" }}>
                {/* leftpart */}

                <div className="leftpart">

                    <div className="dashboard">
                        <h6>
                            <Link to="/home/" style={{ color: "white", textDecoration: "none" }}>
                                Home
                        </Link>
                        </h6>
                    </div>


                    <div className="dashboard">
                        <h6>
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                Today Plan
                        </Link>
                        </h6>
                    </div>
                    <div className="dashboard">
                        <h6>
                            <Link to="/progress" style={{ color: "white", textDecoration: "none" }}>
                                Progress
                        </Link>
                        </h6>
                    </div>

                    <div className="dashboard">
                        <h6>
                            <Link to="/profile"style={{ color: "white", textDecoration: "none" }}>
                                My profile
                        </Link>
                        </h6>
                    </div>
                    <div className="dashboard">
                        <h6>
                            <Link to="/plan" style={{ color: "white", textDecoration: "none" }}>
                                My Plan</Link>
                        </h6>
                    </div>
                </div>
                {/* rightpart */}
                <div className="rightpart">

                    <div className="mydropdownclose" id="dropwdown">
                        <h6>  My Profile</h6>
                        <h6 style={{cursor:"pointer"}} onClick={()=>{

                            localStorage.removeItem('token');
                            window.location='/'
                        }}>   Logout</h6>
                    </div>
                    <i class="fa fa-user" onClick={(e) => {


                        let x = document.getElementById('dropwdown')
                        console.log("hello12332")
                        if (x.classList.contains("mydropdownshow")) {
                            x.classList.remove("mydropdownshow");
                            x.classList.add("mydropdownclose");
                        }
                        else {
                            x.classList.remove("mydropdownclose");
                            x.classList.add("mydropdownshow");

                        }

                    }} ></i>
        &emsp;
        <i className="fa fa-bell right" style={{ cursor: "pointer" }}></i>

                    {/* <i className="fa fa-question-circle right"></i>
            
                <i class="fal fa-arrow-to-left right"></i>
                <button style={{padding:"7px"}} class="right"><i className="fa fa-star">&nbsp;&nbsp;  </i>Get pro </button> */}

                </div>

            </div>
        </>
    )
}

export default Navbar
