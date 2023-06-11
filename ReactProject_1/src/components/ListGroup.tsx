import { useState } from "react";

interface Props {
 items: string[];
 heading: string;
 onSelectItem: (item: string, index: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
 //  const items = ["Erbil", "Baghdad", "Doha", "Istanbul"];
 const [selected, setSelected] = useState(-1);

 return (
  <>
   <h1>{heading}</h1>
   <ul className="list-group">
    {items.map((item, index) => (
     <li
      className={
       selected === index ? "list-group-item active" : "list-group-item"
      }
      key={index}
      onClick={() => {
       setSelected(index);
       //    console.log(item);
       onSelectItem(item, index);
      }}
     >
      {item}
     </li>
    ))}
   </ul>
  </>
 );
}

export default ListGroup;
