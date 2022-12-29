import "../styles.css";
import trollFace from "./images/troll-face.svg"

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <img className="header__image" src={trollFace} alt="troll-face" />
                <h1 className="header__title">Meme Generator</h1>
            </div>
            <p className="header__text">React Course - Project 3</p>
        </header>
    )
}

export default Header; 