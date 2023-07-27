import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/ContactUs";

const App = () => {
 return (
  <BrowserRouter>
   <div className="App">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="contactus" element={<Contactus />} />
    </Routes>
   </div>
  </BrowserRouter>
 );
};

export default App;
