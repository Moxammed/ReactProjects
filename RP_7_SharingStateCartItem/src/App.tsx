import { useState } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";

const App = () => {
 const [cartItem, setCartItem] = useState(["Product1", "Product2"]);

 return (
  <>
   <Navbar cartItem={cartItem.length} />
   <Cart cartItems={cartItem} onClear={() => setCartItem([])} />
  </>
 );
};

export default App;
