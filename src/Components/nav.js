import Home from "./Home.js";
import Contact from "./Contact.js";
import Register from "./register/Register";
import {Routes, Route } from "react-router-dom";
import Login from "./login/login";
import { RoutePaths } from "./utils/enum.js";
import BookGrid from "./booklisting/Booklisting.js";
import { useAuthContext } from "./contexts/authcontext.js";
import {   useNavigate, } from 'react-router-dom';

const Nav = () => {   
    const authContext=useAuthContext(); 
      const navigate =useNavigate();

    return (
        <>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path={RoutePaths.home} element={<Home />} />

              <Route path={RoutePaths.book} 
              element={
                authContext.user.id?(<BookGrid />):(navigate(RoutePaths.login))
                } />
              <Route path={RoutePaths.contact} element={<Contact />} />
              <Route path={RoutePaths.register} element={<Register />}/>
              <Route path={RoutePaths.login} element={<Login />}/>
          </Routes>
        </>
    )
};

export default Nav;