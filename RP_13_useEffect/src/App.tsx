//Example 2
import { useState } from "react";
import ProductList from "./Components/ProductList";

const App = () => {
 const [category, setCategory] = useState("");
 return (
  <div>
   <select
    className="form-select"
    onChange={(event) => {
     setCategory(event.target.value);
    }}
   >
    <option value=""></option>
    <option value="Clothing">Clothing</option>
    <option value="Household">Household</option>
   </select>
   <ProductList category={category} />
  </div>
 );
};

export default App;

// Example 1
// import React, { useEffect, useRef } from "react";

// const App = () => {
//  const ref = useRef<HTMLInputElement>(null);

//  //afterRender
//  useEffect(() => {
//   if (ref.current) ref.current.focus();
//  });

//  useEffect(() => {
//   document.title = "Your App";
//  });

//  return (
//   <div>
//    <input
//     ref={ref}
//     type="text"
//     onChange={() => console.log(ref.current?.value)}
//     className="form-control"
//    />
//   </div>
//  );
// };

// export default App;
