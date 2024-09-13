import Cell from "./Cell.js";

export default class Board {
    #board = [];
    #deletedSymbol;
    constructor(
        rows = 10,
        columns = 10,
        values = [1, 2, 3, 4],
        deletedSymbol = "x"
    ) {
        this.#board = Board.randomizer(rows, columns, values);
        this.#deletedSymbol = deletedSymbol;

        return this;
    }

    get board() {
        return this.#board;
    }

    toString() {
        return (
            this.#board
                .map((rows) => rows.map((cell) => cell.toString()).join("  "))
                .join("\n")
        );
    }

    onCellClick(targetCell) {
        const targetValue = targetCell.value;
        if (targetValue === this.#deletedSymbol) return null;

        targetCell.deleteCell(this.#deletedSymbol);
        const neighbors = this.getNeighbors(targetCell);

        // if cell value equal to target onCellClick
        return neighbors.forEach((cell) => {
            if (cell.value === targetValue) this.onCellClick(cell);
        });
    }

    getNeighbors(cell) {
        const neighbors = [];
        const [row, column] = cell.coordinates;
        for (let i = -1; i < 2; i = i + 2) {
            neighbors.push(this.getCell(row + i, column));
            neighbors.push(this.getCell(row, column + i));
        }
        return neighbors.filter((neighbors) => neighbors !== null);
    }

    getCell(row, column) {
        if (
            row >= this.#board.length ||
            column >= this.#board[0].length ||
            row < 0 ||
            column < 0
        )
            return null;
        return this.#board[row][column];
    }

    static randomizer(rows, columns, values) {
        const array = [];

        for (let r = 0; r < rows; r++) {
            const row = [];
            for (let c = 0; c < columns; c++)
                row[c] = new Cell(
                    values[this.randomInteger(0, values.length)],
                    r,
                    c
                );
            array[r] = row;
        }
        return array;
    }

    static randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
