import React from 'react';
import './App.css';
import {INTERVAL, N_COLUMNS, N_ROWS} from "./config/config";
import Game from "./components/Game";

export default function App(){
  return (<div>
    {/*<button> Start game</button>*/}
    <Game name="Game of Live" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>
    {/*<Game name="Game of Live2" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
    {/*<Game name="Game of Live3" columns={N_COLUMNS} rows={N_ROWS} interval={INTERVAL}/>*/}
  </div>);
}