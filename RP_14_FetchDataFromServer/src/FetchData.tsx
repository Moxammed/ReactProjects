import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
 id: number;
 name: string;
}

const FetchData = () => {
 const [user, setUser] = useState<User[]>([]);
 const [error, setError] = useState("");

 useEffect(() => {
  const controller = new AbortController();
  axios
   .get("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal,
   })
   //    .then((response) => console.log(response.data))
   .then((response) => setUser(response.data))
   .catch((err) => {
    if (err instanceof CanceledError) return;
    setError(err.message);
   });

  return () => controller.abort();
 }, []);

 return (
  <>
   {error && <p className="text-danger">{error}</p>}
   <ol>
    {" "}
    {user.map((userr) => (
     <li key={userr.id}>{userr.name}</li>
    ))}
   </ol>
  </>
 );
};

export default FetchData;
