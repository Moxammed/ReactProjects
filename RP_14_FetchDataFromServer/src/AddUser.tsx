import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
 id: number;
 name: string;
}

const AddUser = () => {
 const [users, setUsers] = useState<User[]>([]);
 const [errs, setErrors] = useState();

 useEffect(() => {
  const controller = new AbortController();
  axios
   .get("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal,
   })
   .then((res) => setUsers(res.data))
   .catch((err) => {
    if (err instanceof CanceledError) return;
    setErrors(err.message);
   });

  return () => controller.abort();
 }, []);

 const addUser = () => {
  const newUser = { id: 0, name: "Ahmed" };
  const originalUsers = [...users];
  setUsers([newUser, ...users]);
  axios
   .post("https://jsonplaceholder.typicode.com/users/", newUser)
   .then((res) => setUsers([res.data, ...users]))
   .catch((err) => {
    setErrors(err.message);
    setUsers([...originalUsers]);
   });
 };

 const updateUser = (user: User) => {
  //   const updatedUser = user.name + "!";  ///Bad way to implement it
  const originalUsers = [...users];
  const updatedUser = { ...user, name: user.name + "!" };
  setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

  axios
   .patch("https://jsonplaceholder.typicode.com/xusers/" + user.id, updatedUser)
   .catch((err) => {
    setErrors(err.message);
    setUsers(originalUsers);
   });
 };

 return (
  <>
   {errs && <p className="text-danger">{errs}</p>}

   <button className="btn btn-primary" onClick={addUser}>
    Add
   </button>

   <ul className="list-group">
    {users.map((user) => (
     <li
      key={user.id}
      className="list-group-item d-flex justify-content-between"
     >
      {user.name}
      <div>
       <button
        className="btn btn-outline-secondary mx-1"
        onClick={() => updateUser(user)}
       >
        Update
       </button>
       <button className="btn btn-outline-danger">Delete</button>
      </div>
     </li>
    ))}
   </ul>
  </>
 );
};

export default AddUser;
