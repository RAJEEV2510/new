import React from 'react'
import html2canvas from "html2canvas";
import pdfConverter from 'jspdf'
import domtoimage from 'dom-to-image';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line, Bar, ChartData, Pie, Doughnut } from 'react-chartjs-2'
let patientData = {
    labels: ["cold", "flu", "backache", "nausia","knee pain","leg pain","hand pain"],

    datasets: [
        {

            label: "Diesease",
            backgroundColor: ["#DC3912", "green", "blue", "orange", "purple", "red", "#0B4890","red"],
            data: [800, 700, 500, 700, 400, 400, 400,200],
            borderWidth: 3,
            fill: false,
          
            pointBorderColor: "white",
            hoverBackgroundColor: "purple",
            pointHoverRadius: 4,
            color: "green"

        },


    ]

}


function CommonChartDieses() {
    return (
        <div>
                <Bar data={patientData} height={250} width={250} options={{
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
                                    beginAtZero:true
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

                    }></Bar>

            
        </div>
    )
}

export default CommonChartDieses
