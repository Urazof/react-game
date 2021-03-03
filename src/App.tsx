import React, {useEffect, useState} from 'react';
import './App.css';
import {INTERVAL, N_COLUMNS, N_ROWS} from "./config/config";
import Game from "./components/Game";
import {throws} from "assert";


export default function App() {
    const [start, setStart] = useState(false);
    const [row, setRow] = useState(N_ROWS)
    const [interval, setInterval] = useState(INTERVAL)


    return (


        <div className="center-align">
            <div className="container">
                {/*<div className="row">*/}
                {/*    <div className="col">*/}
                <h3 className="header">Game of Live</h3>
                <h6>Please choose size of field</h6>
                <form action="#" style={{
                    paddingTop: 0
                }}>
                    <p className="range-field">
                        <input type="range" id="test5" min="0"
                               max="100" value={row}
                               onChange={(event) => {
                                   setRow(parseInt(event.target.value))
                               }}/>
                    </p>
                </form>

                <h6>Please choose interval</h6>
                <form action="#" style={{
                    paddingTop: 0
                }}>
                    <p className="range-field">
                        <input type="range" id="test5" min="0"
                               max="100" value={interval}
                               onChange={(event) => {
                                   setInterval(parseInt(event.target.value))
                               }}/>
                    </p>
                </form>


                <a className="waves-effect waves-light btn" onClick={() => setStart(true)}>StartGame</a>
                <a className="waves-effect waves-light btn" onClick={() => setStart(false)}>StopGame</a>
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    <div className="col">*/}
                {/*<div className="center-align">*/}

                {start && <div style={{paddingTop: 10}}>
                    <Game name="Game of Live" columns={row} rows={row} interval={interval * 5}/>
                    {/*<Game name="Game of Live" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
                    {/*<Game name="Game of Live2" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
                    {/*<Game name="Game of Live3" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
                </div>}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        </div>


    )
}