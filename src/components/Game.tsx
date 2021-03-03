import * as React from 'react';
// import TransformNumbers from "../services/TransformNumbers";
import {transformField} from "../services/TransformNumbers";
import {getRandomMatrix} from '../util/random';
import Matrix from "./Matrix";
import {N_COLUMNS} from "../config/config";

export default function Game(props: gameProps){
    //matrix as a state and effect
    const [numbers, setNumbers] = React.useState(getRandomMatrix(props.rows || 50, props.columns || 50));

    React.useEffect(() => {
        const intervalId = setInterval(() => setNumbers(num => transformField(num)), props.interval || 1000);
        return () => clearInterval(intervalId);
    }, [props.interval]);

    //cellsize is dependent on window size
    const [cellSize, setCellSize] = React.useState(calculateCellSize());
    React.useEffect( () => {
        window.addEventListener('resize', () => {setCellSize(calculateCellSize())});
        return () => window.removeEventListener('resize', () => {setCellSize(calculateCellSize())});
    }, []);

    function calculateCellSize(){
        return Math.min(window.innerHeight * 0.75, window.innerWidth*0.75)/N_COLUMNS - 1;
    }

    return <React.Fragment>
        {/*<h1>{props.name}</h1>*/}
        <Matrix numbers={numbers} cellSize={cellSize} />

    </React.Fragment>;
}

type gameProps = {
    rows: number,
    columns: number,
    interval: number,
    name: string,
}