import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen.jsx";
import GameScreen from "./components/GameScreen.jsx";
import EndScreen from "./components/EndScreen.jsx";
import "./stylesheets/reset.css";
import "./stylesheets/App.css";
import logo from "./assets/logo.png";

export default function App() {
    const [status, setStatus] = useState("Waiting");
    const [categories, setCategories] = useState({
        champions: false,
        items: false,
        esports: false,
    });
    const [difficulty, setDifficulty] = useState("");
    const [questionResults, setQuestionResults] = useState([]);

    useEffect(() => {
        if (questionResults.length == 10) {
            setCurrentStatus("Done");
        }
    }, [questionResults]);

    function setCurrentStatus(newStatus) {
        if (newStatus == "Waiting") {
            setQuestionResults([]);
        }

        setStatus(newStatus);
    }

    function addResult(result) {
        setQuestionResults((prev) => [...prev, result]);
    }

    return (
        <>
            <div className="img-header">
                <img src={logo} alt="" />
            </div>
            {status == "Waiting" && (
                <StartScreen
                    setCurrentStatus={setCurrentStatus}
                    setCategories={setCategories}
                    categories={categories}
                    setDifficulty={setDifficulty}
                    difficulty={difficulty}
                />
            )}
            {status == "Playing" && (
                <GameScreen
                    categories={categories}
                    difficulty={difficulty}
                    setCurrentStatus={setCurrentStatus}
                    addResult={addResult}
                />
            )}
            {status == "Done" && (
                <EndScreen
                    questionResults={questionResults}
                    setCurrentStatus={setCurrentStatus}
                />
            )}
        </>
    );
}
