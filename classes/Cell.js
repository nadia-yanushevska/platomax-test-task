export default class Cell {
    #value;
    #coordinates;
    constructor(value, row, column) {
        this.#value = value;
        this.#coordinates = [row, column];
        return this;
    }

    get value() {
        return this.#value;
    }

    get coordinates() {
        return this.#coordinates;
    }

    toString() {
        return this.#value;
    }

    deleteCell(deletedSymbol) {
        this.#value = deletedSymbol;
    }
}
