import React from 'react'
import Row from "./Row"

export default function Matrix(props: matrixProps){
    function getRows() {
        let i = 0;
        return props.numbers.map(r => <Row key={i++} row={r} cellSize={props.cellSize}/>)
    }

    return <div style={{"display": "flex",
        "flexDirection": "column"}}>
        {getRows()}
    </div>
}

type matrixProps = {
    numbers: number[][],
    cellSize: number
}
