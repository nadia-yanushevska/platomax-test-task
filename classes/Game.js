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
        this.showBoard();

        const { x, y } = Game.getSelectedCellCoordinates(
            this.#GameBoard.board.length,
            this.#GameBoard.board[0].length
        );
        this.#GameBoard.onCellClick(x, y);
        this.showBoard();
    }
    finish() {}
    restart() {}
    showBoard() {
        console.log("Board:\n" + this.#GameBoard.toString());
    }

    // Static
    static suits = ["♠", "♥", "♣", "♦"];
    static default_size = {
        rows: 10,
        columns: 10,
    };
    static messages = {
        rows: `Please enter number of rows or press enter for default - ${Game.default_size.rows}:`,
        columns: `Please enter number of columns or press enter for default - ${Game.default_size.columns}:`,
        default_rows: `The board consisting of ${Game.default_size.rows} rows will be created.`,
        default_columns: `The board consisting of ${Game.default_size.columns} columns will be created.`,
        rowCoordinate: `Please select row:`,
        columnCoordinate: `Please select column:`,
        default_rowCoordinate: `Selected row #`,
        default_columnCoordinate: `Selected column #`,
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
        ranges = []
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
}
