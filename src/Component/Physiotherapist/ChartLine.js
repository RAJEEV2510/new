import React from 'react'
import html2canvas from "html2canvas";
import pdfConverter from 'jspdf'
import domtoimage from 'dom-to-image';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line, Bar, ChartData, Pie, Doughnut } from 'react-chartjs-2'
let patientData = {
    labels: ["jan", "feb", "mar", "april","may","june","july","aug","sept","oct","nov","dec"],

    datasets: [
        {

            label: "New Patient",
            backgroundColor: ["#DC3912", "green", "blue", "black", "purple", "red", "#0B4890",'red','blue','green',"black","yellow"],
            data: [800, 700, 500, 700, 100, 200, 100,2000,3000,4000,5000,1000],
            borderWidth: 3,
            fill: false,
            borderColor: "blue",
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 4,
            color: "green"

        },

        {
            label: "old Patient",
            backgroundColor: ["#DC3912", "green", "blue", "black", "purple", "red", "#0B4890",'red','blue','green',"white","yellow"],
            data: [100, 700, 1500, 1700, 1010, 2001, 3000,5000,7000,1000,5000,1000],
            borderWidth: 2,
            fill: false,
            borderColor: "orange",
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 4,
            color: "green"

        }

    ]

}


function ChartLine() {
    return (
        <>
                        <Line data={patientData} height={250} width={250} options={{
                        title: {
                            display: true,
                            text: "Hospital Survey",
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
                                    labelString: 'No. of patient',
                                    fontColor: "black",
                                    fontFamily: "Calibri",
                                    fontSize: 17,
                                    

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
                                        labelString: "Monthwise",
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
                                align: 'right',
                                display:false,
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

            
        </>
    )
}

export default ChartLine
