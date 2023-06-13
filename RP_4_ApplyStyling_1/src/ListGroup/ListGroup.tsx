import "./ListGroup.css";

interface Props {
 heading: string;
 city: string[];
 onclick: () => void;
}

const ListGroup = ({ city, heading, onclick }: Props) => {
 return (
  <>
   <h1>{heading}</h1>
   <ul className="list-group">
    {city.map((item, index) => (
     <li className="list-group-item" onClick={onclick} key={item}>
      {index + 1 + "  " + item}
     </li>
    ))}
   </ul>
  </>
 );
};

export default ListGroup;
