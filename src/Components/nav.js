import { Outlet, NavLink } from "react-router-dom";
import './nav.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Nav = () => {

    
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
                        <li style={{float:"left"}}>
                            <NavLink to="/book" >Books</NavLink>
                        </li>
                        <li style={{float:"left"}}>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <div class="icons">
                            <li style={{float:"left"}}>
                                <NavLink to="/book">
                                    <AddShoppingCartIcon  />
                                </NavLink>
                            </li>
                            <li  style={{float:"left"}}>
                                <NavLink to="/register">
                                    <AccountCircleIcon  />
                                </NavLink>

                            </li>
                        </div>
                    </div>
                </ul>

            </nav>

            <Outlet />
        </>
    )
};

export default Nav;