export default function EndScreen({ questionResults, setCurrentStatus }) {
    const numCorrect = questionResults.reduce((acc, cur) => {
        if (cur.correct) return acc + 1;
        else return acc;
    }, 0);

    const resultElements = questionResults.map((result, index) => {
        return (
            <div key={index} className="result">
                {result.question}
                {result.choices.map((choice, index) => {
                    const className =
                        choice == result.correctChoice
                            ? "correct choice"
                            : choice == result.selectedChoice
                            ? "wrong choice"
                            : "choice";

                    return (
                        <div key={index} className={className}>
                            {choice}
                        </div>
                    );
                })}
                <br></br>
            </div>
        );
    });

    return (
        <div className="results">
            <div className="num-correct">{numCorrect} out of 10 correct</div>
            {resultElements}
            <button onClick={() => setCurrentStatus("Waiting")}>
                Play Again
            </button>
        </div>
    );
}
