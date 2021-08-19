import React, { useState, useEffect } from 'react'
import { Card } from './Card';
import './style.css'

export const Main = () => {
    let date = new Date(new Date().toLocaleDateString()).toString().substr(4, 11);
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    const [cdate, setDate] = useState(date);
    const updateTime = () => {
        date = new Date(new Date().toLocaleDateString()).toString().substr(4, 11);
        time = new Date().toLocaleTimeString();
        setDate(date);
        setTime(time);
    }
    setInterval(updateTime, 1000);

    function numWithCom(x) {
        return new Intl.NumberFormat().format(x);
    }

    const [state, setState] = useState([]);
    let dataAll, data, flag = 0;
    useEffect(() => {
        const getCovidData = async () => {
            try {
                if (flag === 0) {
                    dataAll = await fetch("https://data.covid19india.org/data.json");
                    dataAll = await dataAll.json();
                    flag = 1;
                }
                data = dataAll.statewise;
                var e = document.getElementById("state");
                setState(data[e.value]);
            } catch (e) {
                console.log("Error: ", e);
            }
        }
        var el = document.getElementById('state');
        if (el) {
            el.addEventListener('change', getCovidData, false);
        }
        getCovidData();
    }, []);

    return (
        <div className="main">
            <div className="card-group" style={{ color: 'white' }}>
                <div className="card">
                    <Card title={cdate} count={ctime} color="purple" />
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <Card title="STATE OF INDIA" count={state.state} color="pink" />
                </div>
                <div className="card">
                    <Card title="ACTIVE" count={numWithCom(state.active)} color="yellow" />
                </div>
                <div className="card">
                    <Card title="CONFIRMED" count={numWithCom(state.confirmed)} color="orange" />
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <Card title="RECOVERED" count={numWithCom(state.recovered)} color="green" />
                </div>
                <div className="card">
                    <Card title="DEATHS" count={numWithCom(state.deaths)} color="red" />
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <Card title="δ-CONFIRMED" count={numWithCom(state.deltaconfirmed)} color="orange" />
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <Card title="δ-RECOVERED" count={numWithCom(state.deltarecovered)} color="green" />
                </div>
                <div className="card">
                    <Card title="δ-DEATHS" count={numWithCom(state.deltadeaths)} color="red" />
                </div>
            </div>
        </div>
    )
}
