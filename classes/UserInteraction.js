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

    static getUserYN(...rest) {
        return UserInteraction.#getUserInput(this.inputTypes.bool, ...rest);
    }

    static getUserNumber(...rest) {
        return UserInteraction.#getUserInput(
            this.inputTypes.positiveInteger,
            ...rest
        );
    }

    static #getUserInput(
        type = this.inputTypes.bool,
        question,
        required = true
    ) {
        let answer = "";
        do {
            answer = prompt(question);
        } while (!this.#validator(type, answer, required));
        return answer;
    }

    static #validator(type, input, required) {
        let validator;
        switch (type) {
            case this.inputTypes.bool:
                validator = input === "y" || input === "n";
                break;

            case this.inputTypes.positiveInteger:
                const number = Number.parseInt(input);
                validator = number !== NaN && number > 0;
        }
        return validator || (!required && input === "");
    }
}
