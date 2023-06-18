import { useState } from "react";

const ArrayUse = () => {
 const [tags, setTags] = useState(["happy", "unhappy"]);

 const addClick = () => {
  //Add an element to array
  setTags([...tags, "exciting"]);
 };

 const remClick = () => {
  setTags(tags.filter((tag) => tag !== "exciting"));
 };

 const updateClick = () => {
  setTags(tags.map((tag) => (tag === "exciting" ? "happy" : tag)));
 };

 return (
  <div>
   <button onClick={addClick}>Add element</button>
   <button onClick={remClick}>remove</button>
   <button onClick={updateClick}>Update exciting</button>
   {tags.map((tag) => (
    <h1>{tag}</h1>
   ))}
  </div>
 );
};

export default ArrayUse;
