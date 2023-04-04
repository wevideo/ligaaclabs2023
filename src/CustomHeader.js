import logo from "./logo-video.svg";
import "./CustomHeader.css";

function CustomHeader(props) {
  return (
    <header className="Header">
      <img src={logo} alt="Logo" />
      <p>{props.title}</p>
    </header>
  );
}

export default CustomHeader;
