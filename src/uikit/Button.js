import MuiButton from "@mui/material/Button";
import "./Button.css";

/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.
 */

const Button = (props) => {
  return <MuiButton className="Button" {...props} />;
};

export { Button };
