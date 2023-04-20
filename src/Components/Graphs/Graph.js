import React from "react";
import "./Graph.css"
import {  Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { useState, useEffect } from "react";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)
function Graph(){


    const chartdata = {
        labels: ["Newly Added", "Edited", "Deleted"],
        datasets: [
          {
            label: "Markets Monitored",
            backgroundColor: [
              "#83ce83",
              "#959595",
              "#f96a5d",
              "#00A6B4",
              "#6800B4",
            ],
            data: [47,20,33],
            hoverOffset: 4
          },
        ],
      };

    const options = {
        plugins:{

            legend:{
                
                position: 'right',
                
                labels: {
                    usePointStyle: true,
                    
                }
                
            }
        },
        maintainAspectRatio: false,
    }
    return(
        <div className="piechart">
           <Pie data={chartdata} options={options}></Pie>
        </div>
    )
}
export default Graph;