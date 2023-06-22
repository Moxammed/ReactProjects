import { useForm } from "react-hook-form";

const FormUsingReactHook = () => {
 const { register, handleSubmit } = useForm();

 console.log(register("name"));
 return (
  <>
   <form onSubmit={handleSubmit((data) => console.log(data))}>
    <div className="mb-3">
     <label htmlFor="name" className="form-label">
      Name
     </label>
     <input
      {...register("name")}
      id="name"
      type="text"
      className="form-control"
     />
    </div>
    <div className="mb-3">
     <label htmlFor="age" className="form-label">
      Name
     </label>
     <input
      {...register("age")}
      id="age"
      type="number"
      className="form-control"
     />
    </div>
    <button className="btn btn-primary" type="submit">
     Submit
    </button>
   </form>
  </>
 );
};

export default FormUsingReactHook;
