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
        <>
            <div className="center-align" style={{flex: "1 0 auto"}}>

                <div className="container">
                    <div className="row">
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

                        {start && <div style={{paddingTop: 10}}>
                            <Game name="Game of Live" columns={row} rows={row} interval={interval * 5}/>
                            {/*<Game name="Game of Live" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
                            {/*<Game name="Game of Live2" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
                            {/*<Game name="Game of Live3" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
                        </div>}

                    </div>
                </div>
            </div>

            <div className="footer">
                <a href="https://github.com/Urazof/">github</a> 2021
            </div>
            <div className="footer2">
           <a href="https://rs.school/js/"><img src="https://rs.school/images/rs_school_js.svg" width="100px"/> </a>
            </div>
        </>


    )
}