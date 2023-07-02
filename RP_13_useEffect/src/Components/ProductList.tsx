import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
 const [products, setProducts] = useState<string[]>([]);

 useEffect(() => {
  console.log(products);
  setProducts(["Clothing", "Household"]);
 }, [category]);
 return <div>{category}</div>;
};

export default ProductList;
