import "../styles.css";
import Frame from "./images/frame.png";

function Meme() {
  return (
    <form className="meme__form">
      <div className="meme__input-wrapper">
        <input className="meme__input_top" placeholder="Shut up" />
        <input className="meme__input_bottom" placeholder="and take my money" />
      </div>
      <button className="meme__button" type="submit">
        <p className="meme__text">
          Get a new meme image{" "}
          <span>
            <img className="meme__frame" src={Frame} alt="frame" />
          </span>
        </p>
      </button>
    </form>
  );
}

export default Meme;
