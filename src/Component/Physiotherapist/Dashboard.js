import React from 'react'
import { Link } from 'react-router-dom'
import Appointment from './Appointment'
import ChartLine from './ChartLine'
import CommonChartDieses from './CommonChartDieses'
import './Dashboard.css'


function Dashboard() {


    return (<div>

        <Link to="/client">Client Screen</Link>
        {/**Header  */}
        <div className="physio-dashboard row container-fluid my-5 align-center">
            <div className="totalPatient col-8 col-lg-2 col-sm-2 col-md-2 mx-5 my-5" >
                <div>
                    <i class="fas fa-dumbbell"></i>
                </div>
                <h5 className="text-center">Total Patient</h5>
                <p className="text-center">
                    4000
                    </p>
            </div>
            <div className="DailyPatient col-8 col-lg-2 col-sm-2 col-md-2 mx-5 my-5">
                <div>
                    <i class="fas fa-analytics"></i>
                </div>
                <h5 className="text-center">Daily Patient</h5>
                <p className="text-center">
                    5000
                    </p>

            </div>
            <div className="avgPatientDay col-8 col-lg-2 col-sm-2 col-md-2 mx-5 my-5">
                <div>
                    <i className="fa fa-heart"></i>
                </div>
                <h5 className="text-center">avg Patient</h5>
                <p className="text-center">
                    40000
                    </p>
            </div>

            <div className="newPatientDay col-8 col-lg-2 col-sm-2 col-md-2 mx-5 my-5">
                <div>
                    <i class="fal fa-heart-rate"></i>
                </div>
                <h5 className="text-center ">new Patient</h5>
                <p className="text-center">
                    30
                    </p>
            </div>

        </div>

        <div className="patient-report row mx-2 ">
            <div className="patient-chart col-10 col-sm-5 col-lg-5 col-md-5 mb-3 mx-5">
                <ChartLine></ChartLine>
            </div>
            <div className="common-diesease-report col-10 col-sm-5 col-lg-5 col-md-5">
            <CommonChartDieses></CommonChartDieses>

        </div>
        <div className="w-75">
            <Appointment></Appointment>

        </div>
             
        </div>

    </div>)



}

export default Dashboard;