import UserInteraction from "./UserInteraction.js";

export default class Game extends UserInteraction {
    #messages = {
        rows: "Please enter number of rows (default = 10)",
        columns: "Please enter number of columns (default = 10)",
    };
    constructor() {
        super();
    }

    play() {
        const x = Game.getUserNumber("Pl");
        const y = Game.getUserNumber("Pl1", false);
    }
    finish() {}
    restart() {}
}
