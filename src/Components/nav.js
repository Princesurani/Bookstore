import { Outlet, NavLink } from "react-router-dom";
import '../App.css';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <div class="navtext">
                        <li >
                            <NavLink to="/home">
                            <HomeIcon  />
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/book" >Books</NavLink>
                        </li>
                        <li >
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li class="icons">
                            <IconButton  color="default" aria-label="add to shopping cart">
                                <AddShoppingCartIcon fontSize="large"  style={{ color: "white" }}/>
                            </IconButton>
                            <IconButton  color="white" aria-label="add to shopping cart">
                                <AccountCircleIcon fontSize="large" style={{ color: "white" }} />
                            </IconButton>
                        
                        </li>
                    </div>
                </ul>

            </nav>

            <Outlet />
        </>
    )
};

export default Nav;