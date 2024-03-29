// import React from "react";
// import { useForm } from "react-hook-form";

// interface Props {
//  onClick: (data: {}) => void;
// }

// const GetSearch = ({ onClick }: Props) => {
//  const { handleSubmit, register } = useForm();

//  return (
//   <div className=" flex my-10 justify-center">
//    <form onSubmit={handleSubmit((data) => onClick(data.))}>
//     <input
//      id="searchTXT"
//      {...register("searchTXT")}
//      type="text"
//      className="mx-4 p-2 border-2"
//      placeholder="Search Image ..."
//     />
//     <button type="submit" className="py-2 px-4 border-2">
//      Search
//     </button>
//    </form>
//   </div>
//  );
// };

// export default GetSearch;

import React, { useState } from "react";
const GetSearch = ({ onClick }) => {
 const [text, setText] = useState("");
 const onSubmit = (e) => {
  e.preventDefault();
  onClick(text);
 };
 return (
  <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
   <form onSubmit={onSubmit} className="w-full max-w-sm">
    <div className="flex items-center border-b-2 border-purple-500 py-2">
     <input
      onChange={(e) => setText(e.target.value)}
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      type="text"
      placeholder="Search Image..."
     />
     <button
      className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
      type="submit"
     >
      Search
     </button>
    </div>
   </form>
  </div>
 );
};
export default GetSearch;
