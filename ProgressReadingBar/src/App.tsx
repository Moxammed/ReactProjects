import * as React from "react";
import {
 BrowserRouter as Router,
 Routes,
 Route,
 useNavigate,
} from "react-router-dom";

import UseReadingProgress from "./UseReadingProgress";
import LoginPage from "./LoginPage";
import CreateAccount from "./CreateAccount";
import LoginPageDesign2 from "./LoginPageDesign2";

const App = () => {
 const completion = UseReadingProgress();
 const navigate = useNavigate();
 return (
  <>
   <nav className="sticky z-50 top-0 backdrop-blur-3xl py-1">
    <span
     id="progress-bar"
     style={{
      transform: `translateX(${completion - 100}%)`,
     }}
     className={`absolute bottom-0 w-full transition-transform duration-150 h-1 bg-yellow-400`}
    />
   </nav>
   <div>
    {/* <LoginPage /> */}
    {/* <CreateAccount /> */}
    <LoginPageDesign2 />
    <Router>
     <div className="App">
      <Routes>
       <Route path="/" element={<LoginPageDesign2 />} />
       {/* <Route path="/createAccount" element={<CreateAccount />} /> */}
       {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
     </div>
    </Router>

    {/* {Array.from({ length: 75 }, (_, i) => (
     <div key={i}>Your text {i}</div>
    ))} */}
   </div>
  </>
 );
};

export default App;
