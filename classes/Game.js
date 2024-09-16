import Board from "./Board.js";
import UserInteraction from "./UserInteraction.js";

export default class Game extends UserInteraction {
    #GameBoard = {};

    constructor() {
        super();

        const { x, y } = Game.getBoardSize();
        this.#GameBoard = new Board(x, y, Game.suits, "✖");

        return this;
    }

    start() {
        this.showBoard("Generated Board");
        const defaultRounds = 3;
        let i = 0;

        while (Game.getUserContinue(i, defaultRounds)) {
            this.round();
            i++;
        }

        this.finish();
    }

    finish() {
        this.#GameBoard = {};
        console.log("Game finished.");
    }

    round() {
        const { x, y } = Game.getSelectedCellCoordinates(
            this.#GameBoard.board.length,
            this.#GameBoard.board[0].length
        );
        const targetCell = this.#GameBoard.getCell(x, y);
        console.log(`Targeted cell has value ${targetCell.toString()}.`);
        if (this.#GameBoard.onCellClick(targetCell) === null)
            console.log("Cannot delete deleted cell!");
        else
            this.showBoard(
                `Board after deleting cell at row #${x + 1}, cell #${y + 1}`
            );
    }

    showBoard(label) {
        console.log(label + "\n" + this.#GameBoard.toString() + "\n");
    }

    // Static
    //temp
    static suits = ["♠", "♥", "♣", "♦"];
    static default_size = {
        rows: 8,
        columns: 8,
        maxRows: 50,
        maxColumns: 50,
    };
    static messages = {
        rows: `Please enter number of rows or press enter for default - ${Game.default_size.rows}:`,
        columns: `Please enter number of columns or press enter for default - ${Game.default_size.columns}:`,
        default_rows: `The board consisting of ${Game.default_size.rows} rows will be created.`,
        default_columns: `The board consisting of ${Game.default_size.columns} columns will be created.`,
        rowCoordinate: `Please select row:`,
        columnCoordinate: `Please select column:`,
        default_rowCoordinate: `Randomly selected row #`,
        default_columnCoordinate: `Randomly selected column #`,
        continue: "Continue playing? (y/n)",
    };

    static getBoardSize() {
        return Game.get2Numbers(
            [Game.messages.rows, Game.messages.columns],
            [Game.default_size.rows, Game.default_size.columns],
            [Game.messages.default_rows, Game.messages.default_columns]
        );
    }

    static getSelectedCellCoordinates(rowMax, columnMax) {
        rowMax++;
        columnMax++;
        const defaultRow = Board.randomInteger(1, rowMax);
        const defaultColumn = Board.randomInteger(1, columnMax);

        let { x, y } = Game.get2Numbers(
            [Game.messages.rowCoordinate, Game.messages.columnCoordinate],
            [defaultRow, defaultColumn],
            [
                Game.messages.default_rowCoordinate + defaultRow + ".",
                Game.messages.default_columnCoordinate + defaultColumn + ".",
            ],
            [
                [1, rowMax],
                [1, columnMax],
            ]
        );
        return { x: --x, y: --y };
    }

    static get2Numbers(
        messages,
        default_values,
        default_messages,
        ranges = [
            [1, Game.default_size.maxRows + 1],
            [1, Game.default_size.maxColumns + 1],
        ]
    ) {
        let x;
        let y;
        try {
            const userX = Game.getUserNumber(messages[0], false, ranges[0]);
            const userY = Game.getUserNumber(messages[1], false, ranges[1]);
            x = userX ? userX : default_values[0];
            y = userY ? userY : default_values[1];
        } catch (e) {
            x = default_values[0];
            y = default_values[1];
            console.log(default_messages[0]);
            console.log(default_messages[1]);
        }
        return { x, y };
    }

    static getUserContinue(count = 0, maxCount = 3) {
        try {
            return UserInteraction.getUserYN(Game.messages.continue);
        } catch (e) {
            console.log(count, maxCount);

            return count < maxCount;
        }
    }
}
