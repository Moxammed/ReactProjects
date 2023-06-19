import { useState } from "react";

const ObjectEdit = () => {
 const [game, setGame] = useState({
  id: 1,
  player: {
   name: "John",
  },
 });

 const handleClick = () => {
  setGame({ ...game, player: { ...game.player, name: "Bob" } });
 };
 return (
  <>
   <button onClick={handleClick}>Change Player Name</button>
   <div>
    {game.id} {game.player.name}
   </div>
  </>
 );
};

export default ObjectEdit;
