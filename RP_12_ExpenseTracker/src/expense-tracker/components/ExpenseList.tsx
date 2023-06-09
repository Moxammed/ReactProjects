import React from "react";

interface Expense {
 id: number;
 description: string;
 amount: number;
 category: string;
}

interface Props {
 expense: Expense[];
 onDelete: (exp: number) => void;
}

const ExpenseList = ({ expense, onDelete }: Props) => {
 return (
  <table className="table table-striped table-bordered">
   <thead>
    <tr>
     <th>Description</th>
     <th>Amount</th>
     <th>Category</th>
     <th></th>
    </tr>
   </thead>
   <tbody>
    {expense.map((exp) => (
     <tr key={exp.id}>
      <td>{exp.description}</td>
      <td>{exp.amount}</td>
      <td>{exp.category}</td>
      <td>
       <button onClick={() => onDelete(exp.id)} className="btn btn-danger">
        Delete
       </button>
      </td>
     </tr>
    ))}
   </tbody>
   <tfoot>
    <tr>
     <td>Total</td>
     <td>
      {expense.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}
     </td>
     <td></td>
     <td></td>
    </tr>
   </tfoot>
  </table>
 );
};

export default ExpenseList;
