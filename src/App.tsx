import React, {useState} from 'react';
import './App.css';
import {INTERVAL, N_COLUMNS, N_ROWS} from "./config/config";
import Game from "./components/Game";


function handleClick() {
    return (
        <div>
            <Game name="Game of Live" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>
            {/*<Game name="Game of Live" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
            {/*<Game name="Game of Live2" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
            {/*<Game name="Game of Live3" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
        </div>
    );
    console.log('The link was clicked.');
}

const res = handleClick()

export default function App() {
    const [start, setStart] = useState(false);

    return (
        <>
            <button onClick={() => setStart(true)}>StartGame</button>
            <button onClick={() => setStart(false)}>StopGame</button>
            {start ? res : ''}

        </>
    )
}