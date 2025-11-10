export default function EndScreen({ questionResults, setCurrentStatus }) {
    console.log(questionResults);

    const numCorrect = questionResults.reduce((acc, cur) => {
        if (cur.correct) return acc + 1;
        else return acc;
    }, 0);

    const resultElements = questionResults.map((result, index) => {
        return (
            <div key={index} className="result">
                {result.question}
                {result.choices.map((choice, index) => <div key={index}>{choice == result.correctChoice ? `Correct: ${choice}` : choice}</div>)}
                <br></br>
            </div>
        )
    });

    return <div>
        {resultElements}
        <button onClick={() => setCurrentStatus("Waiting")}>Reset</button>
    </div>;
}
