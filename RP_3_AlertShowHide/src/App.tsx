import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const App = () => {
 const [alertVisible, setAlertVisibility] = useState(false);
 return (
  <>
   {alertVisible && <Alert onClick={() => setAlertVisibility(false)} />}
   <Button color="secondary" onClick={() => setAlertVisibility(true)}>
    My Button
   </Button>
  </>
 );
};

export default App;
