import styles from "./ListGroup.module.css";
import styled from "styled-components";

interface Props {
 heading: string;
 city: string[];
 onclick: () => void;
}

const List = styled.ul`
 padding: 0;
 background-color: coral;
`;
const ListItem = styled.li`
 background-color: blue;
 margin: 10px;
`;

const ListGroup = ({ city, heading, onclick }: Props) => {
 return (
  <>
   <div>
    <button className={styles.MyButton}>My Button</button>
   </div>

   <h1>{heading}</h1>
   <List>
    {city.map((item, index) => (
     <ListItem onClick={onclick} key={item}>
      {index + 1 + "  " + item}
     </ListItem>
    ))}
   </List>
  </>
 );
};

export default ListGroup;
