import React from 'react'

export default function Row(props: rowProps) {
    function getStyle(number: number) {
        return {
            "backgroundColor": number === 1 ? "black" : "lime",
            "border": "solid 1px gray",
            "width": props.cellSize,
            "height": props.cellSize
        };
    }

    function getGrids() {
        let j = 0;
        return props.row.map(number => <div key={j++} style={getStyle(number)}/>)
    }

    return <div style={{"display": "flex", "flexDirection": "row"}}>
        {getGrids()}
    </div>;
}

type rowProps = {
    row: number[],
    cellSize: number,
}