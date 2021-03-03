export function getRandomCell() {
    return Math.round(Math.random());
}

export function getRandomMatrix(n_rows: number, n_columns: number): number[][] {
    const res: number[][] = [];
    for (let i: number = 0; i < n_columns; i++) {
        const row: number[] = [];
        for (let j = 0; j < n_rows; j++) {
            row.push(getRandomCell());
        }
        res.push(row);
    }
    return res;
}