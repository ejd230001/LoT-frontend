import { useEffect, useState } from "react";

export default function GameScreen() {
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [questionNumber, setQuestionNumber] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getQuestion = async () => {
            setLoading(true);
            const response = await fetch("http://localhost:8000/api/question");
            const data = await response.json();
            setCurrentQuestion(data);
            setLoading(false);
        };
        getQuestion();
    }, [questionNumber]);

    function renderCurrentQuestion(question) {
        const answers = [...question.wrongAnswers];
        const randomIndex = Math.floor(Math.random() * 4);
        answers.splice(randomIndex, 0, question.answer);

        const answerElements = answers.map((answer, index) => <button key={index}>{answer}</button>)

        return (
          <div className="question">
            {question.question}
            
            <div className="answer-choices">
              {answerElements}
            </div>
          </div>
        )
    }

    function handleQuestionSubmit(choice) {}

    return (
        <div className="game-screen">
            {loading ? null : renderCurrentQuestion(currentQuestion)}
        </div>
    );
}
