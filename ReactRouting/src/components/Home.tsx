import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
 return (
  <div>
   <h1>Home Page</h1>
   <br />
   <ul>
    <li>
     {/* Endpoint to route to Home component */}
     <Link to="/">Home</Link>
     {/* <a href="/Home">Home</a> */}
    </li>
    <li>
     {/* Endpoint to route to About component */}
     {/* <a href="/About">About</a> */}
     <Link to="/About">About</Link>
    </li>
    <li>
     {/* Endpoint to route to Contact Us component */}
     {/* <a href="/contactus">contact Us</a> */}
     <Link to="/contactus">contact Us</Link>
    </li>
   </ul>
  </div>
 );
};

export default Home;
