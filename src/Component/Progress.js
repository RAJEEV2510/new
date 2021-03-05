import React, { useEffect, useState } from 'react'
import { Line, Bar, ChartData, Pie, Doughnut } from 'react-chartjs-2'
import html2canvas from "html2canvas";
import pdfConverter from 'jspdf'
import domtoimage from 'dom-to-image';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Navbar from './Navbar';
import './progress.css'
import ProgressUpperComponent from './ProgressUpperComponent';
import ProgressLowerComponent from './ProgressLowerComponent';
import Score from './Score';
let weekwise = {
    labels: ["week 1", "week 2", "week 3", "week 4"],

    datasets: [
        {

            label: "Performance Score",

            backgroundColor: ["#DC3912", "green", "blue", "black", "purple", "red", "#0B4890"],
            data: [.8, .7, .50, .7, .6, .7, 1],
            borderWidth: 1,
            fill: false,
            borderColor: "blue",
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 20,
            color: "green"

        },


    ]

}



let monthwise = {
    labels: ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"],

    datasets: [
        {

            label: "Performance Score",

            backgroundColor: ["#DC3912", "green", "blue", "black", "purple", "red", "#0B4890", "pink", "red", "black", "purple", "green"],
            data: [.8, .7, .60, .4, .5, .2, .5, .6, 1, .2, .8, .8],
            borderWidth: 1,
            fill: false,
            borderColor: "blue",
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 10

        },


    ]

}

let daywise = {

    labels: ["Mon", "Tue", "Wed", "Thrus", "Fri", "Sat", "Sun"],

    datasets: [
        {

            label: "Performance Score",

            backgroundColor: ["#DC3912", "green", "blue", "black", "purple", "red", "#0B4890"],
            data: [.8, .7, .60, .4, .5, .2, .5],
            borderWidth: 1,
            fill: false,
            borderColor: "blue",
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 20

        },

    ]

}

let calorieweekwise = {
    labels: ["week 1", "week 2", "week 3", "week 4"],

    datasets: [
        {

            label: "Calorie Score",

            backgroundColor: ["#DC3912", "green", "blue", "black", "purple", "red", "#0B4890"],
            data: [1000, 800, 700, 600, 1500, 2000, 2100],
            borderWidth: 1,
            fill: false,
            borderColor: "blue",
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 20,
            color: "green"

        },


    ]

}



let caloriemonthwise = {
    labels: ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"],

    datasets: [
        {

            label: "Calorie Score",

            backgroundColor: ["#DC3912", "green", "blue", "black", "purple", "red", "#0B4890", "pink", "red", "black", "purple", "green"],
            data: [1080, 770, 600, 400, 500, 1200, 1100, 1050, 1300, 1400, 1500, 1600],
            borderWidth: 1,
            fill: false,
            borderColor: "blue",
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 10

        },


    ]

}

let caloriedaywise = {

    labels: ["Mon", "Tue", "Wed", "Thrus", "Fri", "Sat", "Sun"],

    datasets: [
        {

            label: "Calorie Score",

            backgroundColor: ["#DC3912", "green", "blue", "black", "purple", "red", "#0B4890"],
            data: [900, 1000, 1400, 1500, 1800, 1900, 2000],
            borderWidth: 1,
            fill: false,
            borderColor: "blue",
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 20

        },



    ]

}





function Progress() {

    const [myScore,setMyScore]=useState("");

    useEffect(()=>{
    
         //My score
          setMyScore(JSON.parse(localStorage.getItem("data")))
    
    },[])
    
    

    //performance score
    const [data, setData] = useState(daywise)
    const [dataTime, setDataTime] = useState("Day Wise");
    //calorie data
    const [caloriedata, setCalorieData] = useState(caloriedaywise)
    const [caloriedataTime, setCalorieDataTime] = useState("Day Wise");

  
    //chart type
    const [charttype, setcharttype] = useState(true);

    //performance wise
    //all functions

    let DayWise = () => {
        setData(daywise)
        setDataTime("Day Wise")
    }

    let MonthWise = () => {

        setData(monthwise);
        setDataTime("Month Wise")
    }

    let WeekWise = () => {

        setData(weekwise)
        setDataTime("Week wise")
    }

    //colorie wise


    let calorieDayWise = () => {
        setCalorieData(caloriedaywise)
        setCalorieDataTime("Day Wise")

    }

    let calorieMonthWise = () => {

        setCalorieData(caloriemonthwise)
        setCalorieDataTime("Month Wise")
    }

    let calorieWeekWise = () => {

        setCalorieData(calorieweekwise)
        setCalorieDataTime("Week Wise")

    }

    let demoFromHTML = (value) => {

        let input = undefined;

        if (value === "share1") {
            input = window.document.getElementsByClassName("divToPDF")[0];
            console.log("hello world")
        }
        else {
            input = window.document.getElementsByClassName("divToPDF")[1];
        }

        domtoimage.toPng(input)
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                const pdf = new pdfConverter("l", "pt");
                console.log(img)
                pdf.addImage(img, "JPEG", 15, 110, 800, 250);
                pdf.save("test.pdf");

            })


    }


    return (
        <>
            <Navbar></Navbar>

            <Score></Score>

            <ProgressUpperComponent></ProgressUpperComponent>
            <div className="row my-5 progress-report" >
                <div className="col col-lg-6 col-sm-6 col-md-6 divToPDF">

                    <Line data={data} options={{
                        title: {
                            display: true,
                            text: "Performance Score",
                            fontSize: 20
                        },

                        showLines: {
                            display: true
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        },

                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontColor: "purple", // this here
                                },

                                scaleLabel: {
                                    display: true,
                                    labelString: 'Score',
                                    fontColor: "black",
                                    fontFamily: "Calibri",
                                    fontSize: 17

                                }

                            }],

                            xAxes: [
                                {
                                    ticks: {
                                        fontColor: "purple", // this here,

                                    },
                                    scaleLabel: {
                                        type: "time",
                                        display: true,
                                        labelString: dataTime,
                                        fontColor: "black",
                                        fontSize: 18,
                                        fontFamily: "Calibri"
                                    }
                                }
                            ]
                        },
                        plugins: {
                            datalabels: {
                                anchor: 'end',
                                align: 'top',
                                backgroundColor: "#FF3784",
                                color: "white",
                                formatter: Math.round / 10,
                                font: {
                                    weight: 'bold',
                                },
                                fontColor: "red"
                            }
                        }


                    }

                    }></Line>
                    <div className="button-chart">
                        <button onClick={DayWise} >DayWise</button>
                        <button onClick={WeekWise}>Week Wise</button>
                        <button onClick={MonthWise}>Month Wise</button>
                        <i className="fa fa-share" style={{ color: 'blue', cursor: "pointer" }} onClick={() => { demoFromHTML("share1") }}></i>
                    </div>

                </div>

                <div className="col col-lg-6 col-sm-6 col-md-6 divToPDF">

                    <Line data={caloriedata} options={

                        {

                            title: {
                                display: true,
                                text: "Calorie Burn",
                                fontSize: 17

                            },

                            showLines: {
                                display: true
                            },
                            legend: {
                                display: true,

                                position: "bottom"

                            },

                            scales: {
                                yAxes: [{
                                    ticks: {
                                        fontColor: "purple", // this here
                                    },

                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Calorie',
                                        fontColor: "black",
                                        fontFamily: "Calibri",
                                        fontSize: 17

                                    }

                                }],

                                xAxes: [
                                    {
                                        ticks: {
                                            fontColor: "purple", // this here,

                                        },
                                        scaleLabel: {
                                            type: "time",
                                            display: true,
                                            labelString: caloriedataTime,
                                            fontColor: "black",
                                            fontSize: 18,
                                            fontFamily: "Calibri"
                                        }
                                    }
                                ]
                            },
                            plugins: {
                                datalabels: {
                                    anchor: 'end',
                                    align: 'top',
                                    backgroundColor: "#FF3784",
                                    color: "white",
                                    formatter: Math.round / 10,
                                    font: {
                                        weight: 'bold',
                                    },
                                    fontColor: "red"
                                }
                            }


                        }

                    }></Line>
                    <div className="button-chart">
                        <button onClick={calorieDayWise} >DayWise</button>
                        <button onClick={calorieWeekWise}>Week Wise</button>
                        <button onClick={calorieMonthWise}>Month Wise</button>
                        <i className="fa fa-share" style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { demoFromHTML("share2") }}></i>
                    </div>

                </div>
            </div>
            <ProgressLowerComponent></ProgressLowerComponent>
        </>
    )
}

export default Progress
