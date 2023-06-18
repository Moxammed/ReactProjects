import { useState } from "react";

const NestedObject = () => {
 const [customer, setCustomer] = useState({
  name: "John",
  address: {
   city: "Erbil",
   zipCode: 41222,
  },
 });

 const handleClick = () => {
  setCustomer({
   ...customer,
   address: { ...customer.address, zipCode: 12345 },
  });
 };

 return (
  <>
   <div>{customer.address.zipCode}</div>
   <button onClick={handleClick}>Show</button>
  </>
 );
};

export default NestedObject;
