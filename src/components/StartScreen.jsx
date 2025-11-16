import "../stylesheets/StartScreen.css";

export default function StartScreen({
    setCurrentStatus,
    setCategories,
    setDifficulty,
    categories,
    difficulty,
}) {
    function toggleCategory(category) {
        setCategories((prev) => {
            return { ...prev, [category]: !prev[category] };
        });
    }

    function toggleDifficulty(diff) {
        if (difficulty == diff) {
            setDifficulty("");
        } else {
            setDifficulty(diff);
        }
    }

    return (
        <div className="start-screen">
            <section className="difficulty">
                <h1>Choose Difficulty</h1>
                <div className="difficulty-buttons">
                    <button
                        className={difficulty == "easy" ? "active" : ""}
                        onClick={() => toggleDifficulty("easy")}
                    >
                        Easy
                    </button>
                    <button
                        className={difficulty == "medium" ? "active" : ""}
                        onClick={() => toggleDifficulty("medium")}
                    >
                        Medium
                    </button>
                    <button
                        className={difficulty == "hard" ? "active" : ""}
                        onClick={() => toggleDifficulty("hard")}
                    >
                        Hard
                    </button>
                </div>
            </section>

            <section className="categories">
                <h1>Choose Categories</h1>
                <div className="category-buttons">
                    <button
                        className={categories.champions ? "active" : ""}
                        onClick={() => toggleCategory("champions")}
                    >
                        Champions
                    </button>
                    <button
                        className={categories.items ? "active" : ""}
                        onClick={() => toggleCategory("items")}
                    >
                        Items
                    </button>
                    <button
                        className={categories.esports ? "active" : ""}
                        onClick={() => toggleCategory("esports")}
                    >
                        Esports
                    </button>
                </div>
            </section>

            <button
                className="start-button"
                onClick={() => setCurrentStatus("Playing")}
            >
                Start
            </button>
        </div>
    );
}
