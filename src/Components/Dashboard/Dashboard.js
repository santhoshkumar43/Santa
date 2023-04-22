import React, { useEffect, useState, useRef } from "react";
import "./Dashboard.css";
import Graph from "../Graphs/Graph";
import notification from "../../imagee/notification.png";
import LineGraph from "../Graphs/LineGraph";
import user from "../../imagee/user.png"
import schedule from "../../imagee/schedule.png"
import transaction from "../../imagee/transaction.png"
import settings from "../../imagee/settings.png"
import dashboard from "../../imagee/dashboard.png";
import searchic from "../../imagee/search.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import temperature from "../../imagee/temperature.png";
import feels from "../../imagee/feels.png";
import humidity from "../../imagee/humidity.png";
import pressure from "../../imagee/pressure.png";
import {useNavigate} from "react-router-dom"


function Dashboard({ setIsAuth, isAuth }) {
    let navigate = useNavigate();
    const [wet, setwet] = useState([]);
    const [setter, setsetter] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [search, setsearch] = useState("kolkata");
    const divRef = useRef(null);

    const handleClick = () => {
        setIsVisible(!isVisible);
        divRef.current.style.display = isVisible ? 'none' : 'block';
    };
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/"
        });
    };
    function getAccess() {

        async function fetchData() {
            const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=418980fd544d800ef66538c1f8140ef6`)
            const newData = await result.json();

            return newData

        }

        fetchData().then((data) => {
            setwet(data.main)
            const item = data.map((item) => {
                return item
            });
            setwet(item)
        })
    }
    useEffect(() => {
        getAccess();
        if (!isAuth) {
            navigate("/");
          }

    }, [search])


    const selectopt = (event) => {
        setsearch(event.target.value)

    }




    return (

        <div className="main-dash">
            <div className="nav-dash">
                <div className="in-nav-dash">
                    <h1>Board.</h1>
                    <a><img src={dashboard} /><p>Dashboard</p></a>
                    <a><img src={transaction} /><p>Transition</p></a>
                    <a><img src={schedule} /><p>Schedule</p></a>
                    <a><img src={user} /><p>Users</p></a>
                    <a><img src={settings} /><p>Settings</p></a>
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
                        <div className="search-bar">
                            <input placeholder="Search..." />
                            <button ><img src={searchic} /></button>

                        </div>

                        <img src={notification} />
                        <button onClick={handleClick} className="useric"><img src={localStorage.photoURL} /></button>



                    </div>
                    <div ref={divRef} className="opt">
                        <p>{localStorage.name}</p>
                        <p onClick={signUserOut} >Sign Out</p>
                    </div>
                </div>
                <div className="val-cont-dash">
                    <div className=" cont a-val-cont-dash">

                        <div className="in-val-cont-dash">
                            <img src={temperature} />
                            <p> Temperature</p>
                            <b>{Math.floor(wet.temp) - 270}<sup>0</sup> C</b>
                        </div>
                    </div>
                    <div className=" cont b-val-cont-dash">
                        <div className="in-val-cont-dash">
                            <img src={feels} />
                            <p>Fells Like</p>
                            <b>{Math.floor(wet.feels_like) - 270}<sup>0</sup> C</b>
                        </div>
                    </div>
                    <div className=" cont c-val-cont-dash">
                        <div className="in-val-cont-dash">
                            <img src={humidity} />
                            <p>Humidity</p>
                            <b>{wet.humidity} </b></div>
                    </div>
                    <div className=" cont d-val-cont-dash">
                        <div className="in-val-cont-dash">
                            <img src={pressure} />
                            <p>Pressure</p>
                            <b> {wet.pressure} </b></div>
                    </div>

                </div>
                <div className="graph-cont-dash">
                    <div className="head-graph-cont-dash">
                        <h2>Temperature</h2>
                        <select onChange={selectopt} >
                            <option>Kolkata</option>
                            <option>Chennai</option>
                            <option>Hyderabad</option>
                            <option>Mumbai</option>
                            <option>Bangalore</option>
                            <option>Visakhapatnam</option>
                            <option>Jalandhar</option>

                        </select>
                    </div>
                    <div className="in-graph-cont-dash">

                        <LineGraph search={search} setter={setter} />
                    </div>


                </div>
                <div className="charts-cont-dash">
                    <div className="pie-graph">
                        <div className="in-pie-graph">
                            <h3>Top Products</h3>
                            <select>
                                <option>Kolkata</option>
                                <option>Delhi</option>
                            </select>

                        </div>
                        <Graph />
                        {setter.map((item) => {
                            return (
                                <div>
                                    {item.dt}
                                </div>
                            )
                        })}

                    </div>
                    <div className="todo">
                        <div className="head-todo">
                            <h2>Today's Schedule</h2>
                            <a>See All</a>

                        </div>
                        <div className="cont-todo">
                            <div className="todo-ticket">
                                <div className="a-col-todo" >

                                </div>
                                <div>
                                    <b>Meeting with suppliers from Kuta Bali</b>
                                    <p>14.00-15.00</p>
                                    <p>at Sunset Road, Kuta, Bali </p>
                                </div>
                            </div>
                            <div className="todo-ticket">
                                <div className="b-col-todo">

                                </div>
                                <div>
                                    <b>Check operation at Giga Factory 1</b>
                                    <p>18.00-20.00</p>
                                    <p>at Central Jakarta </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Dashboard;