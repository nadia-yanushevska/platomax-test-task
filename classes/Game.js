import UserInteraction from "./UserInteraction.js";

export default class Game extends UserInteraction {
    constructor() {
        super();
    }

    play() {
        return Game.getUserYN();
    }
    finish() {}
    restart() {}
}
