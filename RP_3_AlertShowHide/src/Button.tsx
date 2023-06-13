import { ReactNode } from "react";

interface Props {
 children: ReactNode;
 onClick: () => void;
 color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
 return (
  <div className={"alert alert-" + color} onClick={onClick}>
   {children}
  </div>
 );
};

export default Button;
