import React, { useEffect } from "react";
import "./LineGraph.css"
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { useState } from "react";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)
function LineGraph(){

    
    const [wet, setwet] =useState([]);
    const [ tim, settim] = useState([])

    
    
    function getAccess(){
        async function fetchData(){
            const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=418980fd544d800ef66538c1f8140ef6`)
            const newData = await result.json();
            
            return newData.list
            
        }

        fetchData().then((data)=>{
            const item = data
            .filter(item=>{
                        const timea =item.dt_txt.slice(10,13)
                        if(timea == 12 ){return item}
                    })
            .map((item)=>{
                return Math.floor(item.main.temp - 270)
            });
            setwet(item)
        })
        fetchData().then((data)=>{
            const time = data
            .filter(time=>{
                        const timea =time.dt_txt.slice(10,13)
                        if(timea == 12 ){return time}
                    })
            .map((time)=>{
                return time.dt_txt
                
            });
            settim(time)
        })
    }
    useEffect(()=>{
        getAccess();
    },[])

    console.log(tim)
    console.log(wet)
    
    
    
    
   
    const chart = {
        labels: tim ,
        datasets: [
            {
                label: "First Dataset",
                data: wet,
                borderColor: '#E9A0A0',
                tension: 0.4,

                pointStyle: 'rect',

                pointBackgroundColor: '#E9A0A0',
                showLine: true
            }
            , {
                label: "second Dataset",
                data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],

                borderColor: '#9BDD7C',
                tension: 0.4,


                pointBorderColor: '#9BDD7C',
                pointBackgroundColor: '#9BDD7C',
                showLine: true
            },
            {
                label: "Third Dataset",
                data: [10, 20, 60, 42, 51, 82, 31, 59, 61, 73, 91, 58],

                borderColor: '#f96a5d',
                tension: 0.4,


                pointBorderColor: '#f96a5d',
                pointBackgroundColor: '#f96a5d',
                showLine: true
            }
        ]
    }
    const options = {
        maintainAspectRatio: false,
        plugins:{
            
            legend:{
                position: 'top',
                labels: {
                    usePointStyle: true,}
            }
        },

        spanGaps: true,

        scales: {
            x: {
                grid: {
                    display: false
                },

            }
        }
    }
    return(
        <div className="Linechart">
            
           <Line data={chart} options={options}></Line>
           <div>{
            
            
            }</div>
        </div>
    )
}
export default LineGraph;