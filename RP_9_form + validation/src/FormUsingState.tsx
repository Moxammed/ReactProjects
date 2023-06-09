import { FormEvent, useState } from "react";

const FormUsingState = () => {
 const [person, setPerson] = useState({
  name: "",
  age: 0,
 });

 const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
  console.log(person);
 };

 return (
  <>
   <form onSubmit={handleSubmit}>
    <div className="mb-3">
     <label htmlFor="name" className="form-label">
      Name
     </label>
     <input
      onChange={(event) => setPerson({ ...person, name: event.target.value })}
      id="name"
      type="text"
      className="form-control"
      value={person.name}
     />
    </div>
    <div className="mb-3">
     <label htmlFor="age" className="form-label">
      Age
     </label>
     <input
      onChange={(event) =>
       setPerson({ ...person, age: parseInt(event.target.value) })
      }
      id="age"
      type="number"
      className="form-control"
      value={person.age}
     />
    </div>
    <button className="btn btn-primary" type="submit">
     Submit
    </button>
   </form>
  </>
 );
};

export default FormUsingState;
