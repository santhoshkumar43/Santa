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
function LineGraph({search}){

    
    const [wet, setwet] =useState([]);
    const [ tim, settim] = useState([]);

    const [del, setdel] =useState([]);
    const [ timdel, settimdel] = useState([]);
    
    console.log(search)
    

    
    
    function getAccess(){
        
        async function fetchData(value){
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=418980fd544d800ef66538c1f8140ef6`
            const result = await fetch(url)
            const newData = await result.json();
            
            return newData.list
            
        }

        fetchData("kolkata").then((data)=>{
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
        fetchData("kolkata").then((data)=>{
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
        fetchData("New Delhi").then((data)=>{
            const item = data
            .filter(item=>{
                        const timea =item.dt_txt.slice(10,13)
                        if(timea == 12 ){return item}
                    })
            .map((item)=>{
                return Math.floor(item.main.temp - 270)
            });
            setdel(item)
        })

    }
    useEffect(()=>{
       
        getAccess();
        
    },[search])

    
    
    
    
    
   
    const chart = {
        labels: tim ,
        datasets: [
            {
                label: "Kolkata",
                data: wet,
                borderColor: '#E9A0A0',
                tension: 0.4,

            

                pointBackgroundColor: '#E9A0A0',
                showLine: true
            }
            , {
                label: "new Delhi",
                data: del,

                borderColor: '#9BDD7C',
                tension: 0.4,


                pointBorderColor: '#9BDD7C',
                pointBackgroundColor: '#9BDD7C',
                showLine: true
            },
         
        ]
    }
    const options = {
        maintainAspectRatio: false,
        plugins:{
            
            legend:{
                align: 'end',
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