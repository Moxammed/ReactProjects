import { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";
import Expenses from "./Expenses";

const [expense, setExpense] = useState({});

const App = () => {
 return (
  <div>
   {/* <ExpenseTracker onClick={(data) => setExpense(data)} /> */}
   <ExpenseTracker onClick={(data) => setExpense({ data })} />
   <Expenses data={expense} />
  </div>
 );
};

export default App;
