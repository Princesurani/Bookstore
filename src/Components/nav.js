import { Outlet, NavLink } from "react-router-dom";
import '../App.css';


const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <div class="p">
                    <li >
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li >
                        <NavLink to="/book">Books</NavLink>
                    </li>
                    <li >
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    </div>
                </ul>

            </nav>

            <Outlet />
        </>
    )
};

export default Nav;