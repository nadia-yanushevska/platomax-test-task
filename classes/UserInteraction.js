export default class UserInteraction {
    static inputTypes = {
        bool: "yn",
        positiveInteger: "pi",
    };

    constructor() {
        if (this.constructor == UserInteraction) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    static getUserYN(question = "Please confirm (y/n)") {
        return UserInteraction.#getUserInput(question, this.inputTypes.bool);
    }

    static getUserNumber(question = "Enter a number:") {
        return UserInteraction.#getUserInput(
            question,
            this.inputTypes.positiveInteger
        );
    }

    static #getUserInput(question, type) {
        let answer = "";
        do {
            answer = prompt(question);
        } while (!this.#validator(answer, type));
        return answer;
    }

    static #validator(input, type = "yn") {
        switch (type) {
            case this.inputTypes.bool:
                return input === "y" || input === "n";

            case this.inputTypes.positiveInteger:
                const number = Number.parseInt(input);
                return number !== NaN && number > 0;
        }
    }
}
