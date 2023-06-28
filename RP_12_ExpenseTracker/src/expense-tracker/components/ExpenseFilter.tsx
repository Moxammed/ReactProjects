const categories = ["", "Utilities", "Groceries", "Entertainment"];

interface Props {
 onSelect: (data: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
 return (
  <div className="mb-3">
   <select
    className="form-control"
    onChange={(e) => {
     onSelect(e.target.value);
    }}
   >
    {categories.map((tag) => (
     <option value={tag} key={tag}>
      {" "}
      {tag}
     </option>
    ))}
   </select>
  </div>
 );
};

export default ExpenseFilter;
