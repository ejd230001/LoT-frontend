import '../stylesheets/StartScreen.css'

export default function StartScreen({ setCurrentStatus }) {
    return (
        <div className="start-screen">
            

            <section className="difficulty">
                <h1>Choose Difficulty</h1>
                <div className="difficulty-buttons">
                    <button>Easy</button>
                    <button>Medium</button>
                    <button>Hard</button>
                </div>
            </section>

            <section className="categories">
                <h1>Choose Categories</h1>
                <div className="category-buttons">
                    <button>Champions</button>
                    <button>Items</button>
                    <button>Esports</button>
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
