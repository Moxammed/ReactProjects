import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";

interface User {
 id: number;
 name: string;
}

const App = () => {
 const [users, setUsers] = useState<User[]>([]);
 const [error, setErrors] = useState("");
 const [isLoading, setLoading] = useState(false);

 useEffect(() => {
  setLoading(true);
  const controller = new AbortController();
  setLoading(true);
  apiClient
   .get("/users", {
    signal: controller.signal,
   })
   //    .then((response) => console.log(response.data))
   .then((response) => {
    setUsers(response.data);
    setLoading(false);
   })
   .catch((err) => {
    if (err instanceof CanceledError) return;
    setErrors(err.message);
    setLoading(false);
   });

  return () => controller.abort();
 }, []);

 const deleteUser = (user: User) => {
  const originalUser = [...users];
  setUsers(users.filter((u) => u.id !== user.id));

  apiClient.delete("/users/" + user.id).catch((err) => {
   setErrors(err.message);
   setUsers(originalUser);
  });
 };

 const addUser = () => {
  const newUser = { id: 0, name: "Ahmed" };
  const originalUsers = [...users];
  setUsers([newUser, ...users]);
  apiClient
   .post("/users/", newUser)
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

  apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
   setErrors(err.message);
   setUsers(originalUsers);
  });
 };

 return (
  <>
   {error && <p className="text-danger">{error}</p>}
   {isLoading && <div className="spinner-border"></div>}
   <button className="btn btn-primary" onClick={addUser}>
    Add
   </button>
   <ul className="list-group">
    {" "}
    {users.map((userr) => (
     <li
      key={userr.id}
      className="list-group-item d-flex justify-content-between"
     >
      {userr.name}{" "}
      <div>
       <button
        className="btn btn-outline-secondary mx-1"
        onClick={() => updateUser(userr)}
       >
        Update
       </button>
       <button
        className="btn btn-outline-danger"
        onClick={() => deleteUser(userr)}
       >
        Delete
       </button>
      </div>
     </li>
    ))}
   </ul>
  </>
 );
};

export default App;
