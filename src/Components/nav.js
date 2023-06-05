import Home from "./Home.js";
import Contact from "./Contact.js";
import Register from "./register/Register";
import {Routes, Route } from "react-router-dom";
import Login from "./login/login";
import { RoutePaths } from "./utils/enum.js";
import { useAuthContext } from "./contexts/authcontext.js";
import {   useNavigate, } from 'react-router-dom';
import Books from "./book/Books.js";
import Editbook from "./book/Editbook.js";
import User from "./user/user.js";
import EditUser from "./user/Edituser.js";
import Category from "./category/category.js";
import EditCategory from "./category/editcategory.js";
import UpdateProfile from "./updateProfile/Updateprofile.js";
import Cart from "./cart/Cart.jsx";
const Nav = () => {   
    const authContext=useAuthContext(); 
      const navigate =useNavigate();

    return (
        <>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path={RoutePaths.home} element={<Home />} />
              <Route path={RoutePaths.contact} element={<Contact />} />
              <Route path={RoutePaths.register} element={<Register />}/>
              <Route path={RoutePaths.login} element={<Login />}/>

              <Route path={RoutePaths.book} 
                element={authContext.user.id?(<Books />):(navigate(RoutePaths.login))} 
              />
              <Route path={RoutePaths.editbook} 
                element={authContext.user.id?(<Editbook />):(navigate(RoutePaths.login))} 
              />
              <Route path={RoutePaths.addbook} 
                element={authContext.user.id?(<Editbook />):(navigate(RoutePaths.login))} 
              />

              <Route path={RoutePaths.user} 
                element={authContext.user.id?(<User />):(navigate(RoutePaths.login))} 
              />
              <Route path={RoutePaths.edituser} 
                element={authContext.user.id?(<EditUser />):(navigate(RoutePaths.login))} 
              />  

              <Route path={RoutePaths.category} 
                element={authContext.user.id?(<Category />):(navigate(RoutePaths.login))} 
              />  
              <Route path={RoutePaths.addCategory} 
                element={authContext.user.id?(<EditCategory />):(navigate(RoutePaths.login))} 
              />  
              <Route path={RoutePaths.editCategory} 
                element={authContext.user.id?(<EditCategory />):(navigate(RoutePaths.login))} 
              /> 
              <Route path={RoutePaths.updateprofile} 
                element={authContext.user.id?(<UpdateProfile />):(navigate(RoutePaths.login))} 
              />  
              <Route path={RoutePaths.cart} 
                element={<Cart/>}
              /> 
              
          </Routes>
        </>
    )
};

export default Nav;