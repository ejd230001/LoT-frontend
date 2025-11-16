import { useState } from "react";
import "../stylesheets/EndScreen.css";
import backArrow from "../assets/back-arrow.png";
import leaderboard from "../assets/leaderboard.png";

export default function EndScreen({ questionResults, setCurrentStatus }) {
    const [currentQuestion, setCurrentQuestion] = useState(questionResults[0]);
    const [questionNum, setQuestionNum] = useState(0);

    function handleBackClick() {
        if (questionNum > 0) {
            setCurrentQuestion(questionResults[questionNum - 1]);
            setQuestionNum((prev) => prev - 1);
        }
    }

    function handleForwardClick() {
        if (questionNum < 9) {
            setCurrentQuestion(questionResults[questionNum + 1]);
            setQuestionNum((prev) => prev + 1);
        }
    }

    const numCorrect = questionResults.reduce((acc, cur) => {
        if (cur.correct) return acc + 1;
        else return acc;
    }, 0);

    const currentChoiceElements = currentQuestion.choices.map(
        (choice, index) => (
            <div
                className={`current-question-choice ${
                    choice == currentQuestion.correctChoice
                        ? "correct"
                        : choice == currentQuestion.selectedChoice
                        ? "wrong"
                        : ""
                }`}
                key={index}
            >
                {choice}
            </div>
        )
    );

    const currentQuestionElement = (
        <div className="current-question">
            <h1 className="current-question-header">
                {currentQuestion.question}
            </h1>

            <div className="current-question-choices">
                {currentChoiceElements}
            </div>
        </div>
    );

    return (
        <div className="end-screen">
            {currentQuestionElement}
            <div className="score">{numCorrect} out of 10 correct</div>
            <div className="end-screen-footer">
                <div className="arrows">
                    <img
                        className="back-arrow"
                        src={backArrow}
                        onClick={handleBackClick}
                    ></img>
                    <img
                        className="forward-arrow"
                        src={backArrow}
                        onClick={handleForwardClick}
                    ></img>
                </div>
                <div className="leaderboard">
                    <img src={leaderboard}></img>
                </div>

                <button onClick={() => setCurrentStatus("Waiting")}>
                    Play Again
                </button>
            </div>
        </div>
    );
}
