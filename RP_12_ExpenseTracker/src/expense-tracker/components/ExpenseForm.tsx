import { useForm } from "react-hook-form"; //register, handleSubmit
import { z } from "zod"; // validation
import { zodResolver } from "@hookform/resolvers/zod"; // error

const schema = z.object({
 description: z
  .string()
  .min(4, "Please enter a proper description more than 4 alphabets"),
 amount: z
  .number({ invalid_type_error: "You should enter a number" })
  .min(1, "Number shoould be positive and at least 1")
  .nonnegative(),
 category: z.string(),
});

type formData = z.infer<typeof schema>;

interface Props {
 getData: (data: formData) => void;
}

const ExpenseForm = ({ getData }: Props) => {
 const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
 } = useForm<formData>({ resolver: zodResolver(schema) });

 return (
  <div>
   <h1 className="mb-5">
    <center>Expenses</center>
   </h1>
   <form
    className="mb-3"
    onSubmit={handleSubmit((data) => {
     getData(data);
     reset();
    })}
   >
    <div className="mb-3">
     <label htmlFor="description" className="form-label">
      Description
     </label>
     <input
      {...register("description")}
      type="text"
      id="description"
      className="form-control"
     />
     {errors.description && (
      <p className="text-danger">{errors.description.message}</p>
     )}
    </div>
    <div className="mb-3">
     <label htmlFor="amount" className="form-label">
      Amount
     </label>
     <input
      {...register("amount", { valueAsNumber: true })}
      id="amount"
      type="number"
      className="form-control"
     />
     {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
    </div>
    <div className="mb-3">
     <select id="category" className="form-control" {...register("category")}>
      <option value={"Groceries"}>Groceries</option>
      <option value={"Utilities"}>Utilities</option>
      <option value={"Entertainment"}>Entertainment</option>
     </select>
    </div>
    <button type="submit">Submit</button>
   </form>
  </div>
 );
};

export default ExpenseForm;
