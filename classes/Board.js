export default class Board {
    #board = [];
    constructor(rows = 10, columns = 10, values = [1, 2, 3, 4]) {
        this.#board = Board.randomizer(rows, columns, values.length);
        return this;
    }

    get board() {
        return this.#board;
    }

    onCellClick(row, column) {
        //recursion with visitNeighbours
    }

    static randomizer(rows, columns, max) {
        const array = [];
        for (let r = 0; r < rows; r++) {
            const row = [];
            for (let c = 0; c < columns; c++)
                row[c] = this.randomInteger(1, max);
            array[r] = row;
        }
        return array;
    }

    static randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
