interface Props {
 cartItems: string[];
 onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
 return (
  <>
   <h2>Cart Items:</h2>
   <ul>
    {cartItems.map((item) => (
     <li> {item}</li>
    ))}
   </ul>
   <button onClick={onClear}>Clear items</button>
  </>
 );
};

export default Cart;
