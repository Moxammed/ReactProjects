import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
 id: number;
 name: string;
}

const FetchData = () => {
 const [users, setUser] = useState<User[]>([]);
 const [error, setError] = useState("");
 const [isLoading, setLoading] = useState(false);

 useEffect(() => {
  setLoading(true);
  const controller = new AbortController();
  setLoading(true);
  axios
   .get("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal,
   })
   //    .then((response) => console.log(response.data))
   .then((response) => {
    setUser(response.data);
    setLoading(false);
   })
   .catch((err) => {
    if (err instanceof CanceledError) return;
    setError(err.message);
    setLoading(false);
   });

  return () => controller.abort();
 }, []);

 const deleteUser = (user: User) => {
  const originalUser = [...users];
  setUser(users.filter((u) => u.id !== user.id));

  axios
   .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
   .catch((err) => {
    setError(err.message);
    setUser(originalUser);
   });
 };

 return (
  <>
   {error && <p className="text-danger">{error}</p>}
   {isLoading && <div className="spinner-border"></div>}
   <ul className="list-group">
    {" "}
    {users.map((userr) => (
     <li
      key={userr.id}
      className="list-group-item d-flex justify-content-between"
     >
      {userr.name}{" "}
      <button
       className="btn btn-outline-danger"
       onClick={() => deleteUser(userr)}
      >
       Delete
      </button>
     </li>
    ))}
   </ul>
  </>
 );
};

export default FetchData;
