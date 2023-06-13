import Button from "./Button";

const App = () => {
 const handleClick = () => {
  console.log("clicked");
 };

 return (
  <Button color="danger" onClicked={handleClick}>
   Hello World!
  </Button>
 );
};

export default App;
