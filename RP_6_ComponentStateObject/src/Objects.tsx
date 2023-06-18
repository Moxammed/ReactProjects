import { useState } from "react";

const Objects = () => {
 const [drink, setDrink] = useState({
  title: "coffee",
  price: 5,
 });

 //to edit the object use it as below
 const handleClick = () => {
  setDrink({ ...drink, price: 7 });
 };

 return (
  <>
   <div>{drink.price}</div>
   <button onClick={handleClick}>Show</button>
  </>
 );
};

export default Objects;
