import React, { useEffect } from "react";
import "./Dashboard.css";
import { useState, useRef } from "react";
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
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";

function Dashboard({ setIsAuth, isAuth }) {



    const [setter, setsetter] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
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
                    <div className="head-graph-cont-dash">
                        <h2>Activities</h2>
                        <select>
                            <option>Select the city</option>
                            <option>Kolkata</option>
                            <option>New delhi</option>
                            
                        </select>
                    </div>
                    <div className="in-graph-cont-dash">

                        <LineGraph setter={setter} />
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