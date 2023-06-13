import ListGroup from "./ListGroup";

const App = () => {
 const city = ["Erbil", "Istanbul", "Doha", "NY"];
 return (
  <ListGroup
   city={city}
   heading="Cities"
   onclick={() => {
    console.log("clicked");
   }}
  />
 );
};

export default App;
