import { useState } from "react";

const ArrayObjectUpdate = () => {
 const [tagsObj, setTagsObj] = useState([
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Moha" },
 ]);
 const handleClick = () => {
  setTagsObj(
   tagsObj.map((tag) => (tag.id === 1 ? { ...tag, name: "Husain" } : tag))
  );
 };
 return (
  <>
   {tagsObj.map((tag) => (
    <h5>{tag.id + " " + tag.name}</h5>
   ))}

   <button onClick={handleClick}>Show Element</button>

   {/* <div>ArrayObjectUpdate</div> */}
  </>
 );
};

export default ArrayObjectUpdate;
