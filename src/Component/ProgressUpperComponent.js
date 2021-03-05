import React from 'react'
import './progress.css'
function ProgressUpperComponent() {
    return (
        <>
        <div className="row  progressuppercomponent " style={{ width: "100%", marginTop: "40px" }}>
            <div className="col-lg-4 profileuppercomponent">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaosnplt9mDlIW4ZdirMbga71Kt8Q3x3CZA&usqp=CAU"></img>
                <h6 className="my-2">   Rony , Male <br></br>70kg&nbsp;21,</h6>
            </div>
            <div className="col-lg-4">
                <div className="calorie-burned">
                    <h5><i className="fa fa-fire" style={{ color: "red" }}></i> &nbsp;
                    Total Calorie Burned</h5>
                    <h5 style={{ marginLeft: "80px" }}>
                        5000 Cal
                    </h5>

                </div>

            </div>
            <div className="overall-score col-lg-4">
                <h5><i className="fa fa-signal" style={{ color: "green" }}></i> &nbsp;
                    overall Score</h5>
                <h5 style={{ marginLeft: "50px" }}>
                    00.790 
                    </h5>

            </div>


        </div>
        </>
    )
}

export default ProgressUpperComponent
