import Home from "./Home.js";
import Contact from "./Contact.js";
import Books from "./Books.js";
import Register from "./register/Register";
import {Routes, Route } from "react-router-dom";
import Login from "./login/login";



const Nav = () => {

    
    return (
        <>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="home" element={<Home />} />

              <Route path="book" element={<Books />} />
              <Route path="contact" element={<Contact />} />
              <Route path="register" element={<Register />}/>
              <Route path="login" element={<Login />}/>
          </Routes>
        </>
    )
};

export default Nav;