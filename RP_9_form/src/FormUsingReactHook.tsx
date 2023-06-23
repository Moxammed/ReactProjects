import { useForm } from "react-hook-form";

interface FormData {
 name: string;
 age: number;
}

const FormUsingReactHook = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<FormData>();
 //  console.log("Register: " + register);
 //  console.log("handleSubmit: " + handleSubmit);
 console.log(errors);

 //  console.log(register("name"));
 return (
  <>
   <form onSubmit={handleSubmit((data) => console.log(data))}>
    <div className="mb-3">
     <label htmlFor="name" className="form-label">
      Name
     </label>
     <input
      {...register("name", { required: true, minLength: 3, maxLength: 12 })}
      id="name"
      type="text"
      className="form-control"
     />
     {errors.name?.type === "required" && <p> name is required</p>}
     {errors.name?.type === "minLength" && (
      <p> Enter more than two alphabets</p>
     )}
    </div>
    <div className="mb-3">
     <label htmlFor="age" className="form-label">
      Name
     </label>
     <input
      {...register("age", { required: true, min: 1, max: 150 })}
      id="age"
      type="number"
      className="form-control"
     />
     {errors.age?.type === "required" && <p>Age is required</p>}
     {errors.age?.type === "min" && <p>Age Shoulde be more than 0</p>}
     {errors.age?.type === "max" && <p>Age Shoulde not exceed 150</p>}
    </div>
    <button className="btn btn-primary" type="submit">
     Submit
    </button>
   </form>
  </>
 );
};

export default FormUsingReactHook;
