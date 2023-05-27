import { Outlet, NavLink } from "react-router-dom";
import './header.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const Header = () => {

    
    return (
        <>
            <nav>
                <ul class="navul">
                    <div class="navtext">
                        <li  style={{float:"left"}} >
                            <NavLink to="">
                                <HomeIcon /> 
                            </NavLink>
                        </li>
                        <div class="icons">
                            <li  >
                                <NavLink to="/register">
                                    <AccountCircleIcon  />
                                </NavLink>

                            </li>
                            <li >
                                <NavLink to="/book">
                                    <AddShoppingCartIcon  />
                                </NavLink>
                            </li>
                        </div>
                        <li >
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li >
                            <NavLink to="/book" >Books</NavLink>
                        </li>
                    </div>
                </ul>

            </nav>

            <Outlet />

        </>
    )
};

export default Header;