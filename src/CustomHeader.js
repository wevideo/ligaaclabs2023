import logo from "./logo-video.svg";
import "./CustomHeader.css";

function CustomHeader(props) {
  const isPremium = true;

  return (
    <header className="Header">
      <div style={{ display: "flex" }}>
        <img src={logo} alt="Logo" />
        {isPremium ? <h4 className="Premium">Premium</h4> : null}
      </div>
      <p>{props.title}</p>
    </header>
  );
}

export default CustomHeader;
