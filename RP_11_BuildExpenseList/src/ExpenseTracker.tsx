import { useForm } from "react-hook-form";
import { object, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = object({
 description: z.string().min(4, "Description should be at least 4 characters"),
 amount: z.number({ invalid_type_error: "Amount is required" }),
 category: z.string(),
});

interface Props {
 oNClick: (data: {}) => void;
}

type formData = z.infer<typeof schema>;

const ExpenseTracker = ({ oNClick }: Props) => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<formData>({ resolver: zodResolver(schema) });
 const [expense, setExpense] = useState({});

 return (
  <>
   <div className="mb-5">
    <form
     onSubmit={handleSubmit((data) => {
      console.log(data);
      oNClick(expense);
     })}
    >
     <div className="mb-3">
      <label htmlFor="description" className="form-label">
       Description
      </label>
      <input
       {...register("description")}
       id="description"
       type="text"
       className="form-control"
      />
      {errors.description && errors.description.message}
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
      {errors.amount && errors.amount.message}
     </div>
     <div className="mb-3">
      <label htmlFor="category" className="form-label">
       Category
      </label>
      <div>
       <select {...register("category")} id="category">
        {/* A big mistake here. It is hard coded. It should get the data automatically which means dynamic */}
        <option></option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
       </select>
      </div>
     </div>
     <button className="btn btn-primary" type="submit">
      Submit
     </button>
    </form>
   </div>

   {}
  </>
 );
};

export default ExpenseTracker;
