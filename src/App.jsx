import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen.jsx";
import GameScreen from "./components/GameScreen.jsx";
import "./stylesheets/styles.css";

export default function App() {
    const [status, setStatus] = useState("Waiting");
    const [categories, setCategories] = useState({
        champions: true,
        items: true,
        esports: true,
    });
    const [difficulty, setDifficulty] = useState("");

    function setCurrentStatus(newStatus) {
        setStatus(newStatus);
    }

    return (
        <>
            {status == "Waiting" && <StartScreen setCurrentStatus={setCurrentStatus} />}
            {status == "Playing" && (
                <GameScreen
                    categories={categories}
                    difficulty={difficulty}
                    setCurrentStatus={setCurrentStatus}
                />
            )}
            {status == "Done" && <EndScreen />}
        </>
    );
}
