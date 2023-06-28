import React, { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

const App = () => {
 const [expense, setExpense] = useState([
  { id: 1, description: "aaa", amount: 20, category: "Utilities" },
  { id: 2, description: "bbb", amount: 20, category: "Groceries" },
  { id: 3, description: "ccc", amount: 20, category: "Utilities" },
 ]);
 const [cat, setCat] = useState("");

 const expSelected = cat ? expense.filter((e) => e.category === cat) : expense;

 if (expense.length === 0) return null;

 return (
  <>
   <ExpenseForm
    getData={(newData) =>
     setExpense([...expense, { ...newData, id: expense.length + 1 }])
    }
   />
   <ExpenseFilter onSelect={(data) => setCat(data)} />
   <ExpenseList
    expense={expSelected}
    onDelete={(id) => setExpense(expense.filter((dta) => dta.id !== id))}
   />
  </>
 );
};

export default App;
