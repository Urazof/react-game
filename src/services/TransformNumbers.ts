export function transformField(numbers: number[][]): number[][] {
    const res: number[][] = [];
    for (let i: number = 0; i < numbers.length; i++) {
        const row: number[] = [];
        for (let j: number = 0; j < numbers[i].length; j++) {
            row.push(calculate(numbers, i, j));
        }
        res.push(row);
    }
    return res;
}

function calculate(numbers: number[][], i: number, j: number): number {
    let sum: number = 0;
    getNeighbors(i, j).forEach((neighbor) => {
        sum += getValue(numbers, ...neighbor);
    })
    if (numbers[i][j] === 1) { //was alive cell
        return sum === 3 || sum === 2 ? 1 : 0;
    } else { //was dead cell
        return sum === 3 ? 1 : 0;
    }
}

function getValue(numbers: number[][], i: number, j: number): number {
    if (i < 0 || j < 0 || i >= numbers.length || j >= numbers[i].length) return 0;
    else return numbers[i][j];
}

function getNeighbors(i: number, j: number): point[] {
    return [[i,     j - 1],
            [i,     j + 1],
            [i - 1, j],
            [i + 1, j],
            [i - 1, j - 1],
            [i + 1, j + 1],
            [i - 1, j + 1],
            [i + 1, j - 1]]
}

type point = [number, number];