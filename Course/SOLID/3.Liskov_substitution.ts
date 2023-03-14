// Una subclase debe ser usaba cuando la clase base puede ser usada

export class QuizQuestion {
    private _question: string;
    private _answer1: string;
    private _answer2: string;
    private _answer3: string;
    private _answer4: string;
    private _correctAnswer: number;

    constructor(
        quest: string,
        ans1: string,
        ans2: string,
        ans3: string,
        ans4: string,
        correctAns: number) {
        this._question = quest,
            this._answer1 = ans1,
            this._answer2 = ans2,
            this._answer3 = ans3,
            this._answer4 = ans4,
            this._correctAnswer = correctAns
    };

    public get questionn(): string {
        return this._question;
    };

    public get answer1(): string {
        return this._answer1;
    };

    public get answer2(): string {
        return this._answer2;
    };

    public get answer3(): string {
        return this._answer3;
    };

    public get answer4(): string {
        return this._answer4;
    };

    public get correctAnswer(): number {
        return this._correctAnswer;
    };

};

// Aunque parece una QuizQuestion, extender su uso deviene en fallas
// Lo mejor sería usar una clase especial con sus métodos 
// export class TrueFalseQuestion extends QuizQuestion {
//     constructor(question) {
//         super(question, "TRUE", "FALSE", null, null, 1);
//     }
// };

function formatQuestion(quizQuestion: QuizQuestion) {
    console.log(quizQuestion.questionn);
    console.log(`1. ${quizQuestion.answer1}`);
    console.log(`2. ${quizQuestion.answer2}`);
    console.log(`3. ${quizQuestion.answer3}`);
    console.log(`4. ${quizQuestion.answer4}`);
}

let quizQuestion = new QuizQuestion("Wich framework uses TypeScript", "React", "Vue", "Angular", "Cycle", 3);

formatQuestion(quizQuestion);
