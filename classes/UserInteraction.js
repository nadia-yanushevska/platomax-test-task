export default class UserInteraction {
    constructor() {
        if (this.constructor == UserInteraction) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    static inputTypes = {
        bool: "yn",
        positiveInteger: "pi",
    };

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
        required = true,
        range = []
    ) {
        let answer = "";
        do {
            answer = prompt(question);
            console.log(this.#validatorMessage(type, answer, required, range));
        } while (!this.#validator(type, answer, required, range));
        return type === this.inputTypes.bool ? answer === "y" : +answer;
    }

    static #validator(type, input, required, range) {
        let validator;
        switch (type) {
            case this.inputTypes.bool:
                validator = input === "y" || input === "n";
                break;

            case this.inputTypes.positiveInteger:
                const number = Number.parseInt(input);
                validator = number !== NaN && number > 0;
                if (range.length)
                    validator =
                        validator && number >= range[0] && number < range[1];
        }
        return validator || (!required && input === "");
    }
    static #validatorMessage(type, input, _, range) {
        let message = "";
        switch (type) {
            case this.inputTypes.bool:
                message = 'Must be either "n" or "y';
                break;

            case this.inputTypes.positiveInteger:
                message = "Must be a valid positive number";
                if (range.length)
                    message += ` within inclusive range (${range[0]}, ${range[1] - 1})`;
        }
        return message;
    }
}
