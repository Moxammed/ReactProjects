import { ReactNode } from "react";
import Alert from "./Alert";

interface Props {
 children: ReactNode;
 color?: "primary" | "secondary" | "danger";
 onClicked: () => void;
}

const Button = ({ children, color = "primary", onClicked }: Props) => {
 return (
  <button type="button" className={"alert alert-" + color} onClick={onClicked}>
   {children}
  </button>
 );
};

export default Button;
