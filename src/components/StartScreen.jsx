import logo from "../assets/logo.png"

export default function StartScreen({setCurrentStatus}) {

    return (
        <>
            <div className="img-header">
                <img src={logo} alt="" />
            </div>
                
            <section className="difficulty">
                <div className="difficulty-buttons">
                    <button>Easy</button>
                    <button>Medium</button>
                    <button>Hard</button>
                </div>
            </section>

            <section className="categories">
                <div className="category-buttons">
                    <button>Champions</button>
                    <button>Lore</button>
                    <button>Esports</button>
                </div>
            </section>

            <button className="start-button" onClick={() => setCurrentStatus("Playing")}>Start</button>

        </>
    )
}