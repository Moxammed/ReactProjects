import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
 onClick: () => void;
}

const Div = styled.div`
 margin: 5px;
 padding: 5px;
`;

const Like = ({ onClick }: Props) => {
 const [redHeart, setRedHeart] = useState(false);
 const toggle = () => {
  onClick();
  setRedHeart(!redHeart);
 };
 return (
  <>
   <Div>
    {redHeart ? (
     <AiFillHeart color="red" size="50px" onClick={toggle}></AiFillHeart>
    ) : (
     <AiOutlineHeart size="50px" onClick={toggle}></AiOutlineHeart>
    )}
   </Div>
  </>
 );
};

export default Like;
