import Cell from "./Cell.js";

export default class Board {
    #board = [];
    #deletedSymbol;
    constructor(rows = 10, columns = 10, values = [1, 2, 3, 4], deletedSymbol="x") {
        this.#board = Board.randomizer(
            rows,
            columns,
            values
        );
        this.#deletedSymbol = deletedSymbol

        return this;
    }

    get board() {
        return this.#board;
    }

    toString() {
        return this.#board
            .map((rows) => rows.map((cell) => cell.toString()).join("  "))
            .join("\n");
    }

    onCellClick(row, column) {
        console.log("Selected indexes:", row, column);
        this.#board[row][column].deleteCell(this.#deletedSymbol);

        //recursion with visitNeighbours
    }

    static randomizer(rows, columns, values) {
        const array = [];

        for (let r = 0; r < rows; r++) {
            const row = [];
            for (let c = 0; c < columns; c++)
                row[c] = new Cell(values[this.randomInteger(0, values.length)]);
            array[r] = row;
        }
        return array;
    }

    static randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
