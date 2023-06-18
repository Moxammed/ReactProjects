interface Props {
 cartItem: number;
}

const Navbar = ({ cartItem }: Props) => {
 return <h3>Items: {cartItem}</h3>;
};

export default Navbar;
