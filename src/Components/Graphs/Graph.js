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

  const [wet, setwet] =useState([]);
  function getAccess(){
    
    async function fetchData(){
        const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=418980fd544d800ef66538c1f8140ef6`)
        const newData = await result.json();
        
        return newData.list
        
    }

    fetchData().then((data)=>{
        const item = data.map((item)=>{
            return Math.floor(item.main.temp - 270)
        });
        setwet(item)
    })
    

}
useEffect(()=>{
    getAccess();
},[])
console.log(wet)

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
            data: [wet[0], wet[1], wet[2]],
            hoverOffset: 4
          },
        ],
      };

    const options = {
        plugins:{

            legend:{
                
                position: 'right',
                labels: {
                    usePointStyle: true,}
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