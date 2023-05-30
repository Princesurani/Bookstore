import Home from "./Home.js";
import Contact from "./Contact.js";
import Books from "./Books.js";
import Register from "./register/Register";
import {Routes, Route } from "react-router-dom";
import Login from "./login/login";
import { RoutePaths } from "./utils/enum.js";

const Nav = () => {    
    return (
        <>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path={RoutePaths.home} element={<Home />} />

              <Route path={RoutePaths.book} element={<Books />} />
              <Route path={RoutePaths.contact} element={<Contact />} />
              <Route path={RoutePaths.register} element={<Register />}/>
              <Route path={RoutePaths.login} element={<Login />}/>
          </Routes>
        </>
    )
};

export default Nav;