export default class Cell {
    #value;
    constructor(value) {
        this.#value = value;
        return this;
    }

    toString() {
        return this.#value;
    }

    deleteCell(deletedSymbol) {
        this.#value = deletedSymbol;
    }
}
