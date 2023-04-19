import React, { useEffect } from "react";
import "./Dashboard.css";
import { useState } from "react";
import apple from "../../imagee/apple.png";
import Graph from "../Graphs/Graph";
import notification from "../../imagee/notification.png";
import { fetchUrl } from "../../Api/fetchApi";
import LineGraph from "../Graphs/LineGraph";

function Dashboard() {
    const [currancy, setcurrancy] = useState("Canada-Dollar")
    var plug = "/v1/accounting/od/rates_of_exchange";
    const [arr, setarr] = useState([])
    var parameter = `?fields=country_currency_desc,exchange_rate,record_date&filter=country_currency_desc:in:(${currancy},Mexico-Peso),record_date:gte:2020-01-01`;
    const [setter, setsetter] = useState([]);



    async function getAp() {

        const Api = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=418980fd544d800ef66538c1f8140ef6')
            .then((res) => res.json())
            .then((data)=> setsetter(data.list))
    }
   



    return (

        <div className="main-dash">
            <div className="nav-dash">
                <div className="in-nav-dash">
                    <h1>Board.</h1>
                    <a><img src={apple} /><p>Dashboard</p></a>
                    <a><img src={apple} /><p>Dashboard</p></a>
                    <a><img src={apple} /><p>Dashboard</p></a>
                    <a><img src={apple} /><p>Dashboard</p></a>
                    <a><img src={apple} /><p>Dashboard</p></a>
                </div>
                <div className="in-nav-dash">
                    <p>Help</p>
                    <p>Contact us</p>
                </div>


            </div >

            <div className="container-dash">
                <div className="top-cont-dash">
                    <div className="logo-dash">
                        <h1>Dashboard</h1>

                    </div>
                    <div className="search-dash">
                        <input type="search" placeholder="Search" />
                        <img src={notification} />
                        <img src={apple} />


                    </div>
                </div>
                <div className="val-cont-dash">
                    <div className="a-val-cont-dash">
                        <p>Total Contries</p>
                        <b>hello</b>
                    </div>
                    <div className="b-val-cont-dash">
                        <p>Total Revenue</p>
                        <b>$222000</b>
                    </div>
                    <div className="c-val-cont-dash">
                        <p>Total Revenue</p>
                        <b>$222000</b>
                    </div>
                    <div className="d-val-cont-dash">
                        <p>Total Revenue</p>
                        <b>$222000</b>
                    </div>

                </div>
                <div className="graph-cont-dash">
                    <h2>Activities</h2>
                    <select>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                    </select>
                    <div className="in-graph-cont-dash">

                        <LineGraph setter={setter} />
                    </div>


                </div>
                <div className="charts-cont-dash">
                    <div className="pie-graph">
                        {/* <Pie ></Pie> */}
                        <div className="in-pie-graph">
                            <h3>Top Products</h3>
                            <select>
                                <option>hello</option>
                                <option>hello</option>
                                <option>hello</option>
                                <option>hello</option>

                                
                            </select>

                        </div>
                        <Graph />
                        {setter.map((item)=>{
                                    return(
                                        <div>
                                            {item.dt}
                                        </div>
                                    )
                                })}

                    </div>
                    <div className="todo">

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Dashboard;