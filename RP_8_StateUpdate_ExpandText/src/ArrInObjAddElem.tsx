import { useState } from "react";

const ArrInObjAddElem = () => {
 const [pizza, setPizza] = useState({
  name: "Spicy Pepperoni",
  toppings: ["Mushroom"],
 });

 const handleClick = () => {};
 setPizza({ ...pizza, toppings: [...pizza.toppings, "Masolini"] });

 return (
  <>
   <div>
    {pizza.name}{" "}
    {pizza.toppings.map((piz) => (
     <p>{piz}</p>
    ))}
   </div>
   <button onClick={handleClick}>Add Me</button>
  </>
 );
};

export default ArrInObjAddElem;
