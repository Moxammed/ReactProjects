import ListGroup from "./components/ListGroup";

function App() {
 const items = ["Erbil", "Baghdad", "Doha", "Istanbul"];

 const handleSelectItem = (item: string, index: number) => {
  console.log(item + " " + index);
 };

 return (
  <div>
   <ListGroup
    items={items}
    heading={"Cities"}
    onSelectItem={handleSelectItem}
   />
  </div>
 );
}

export default App;
