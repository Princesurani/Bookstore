import { Outlet, NavLink } from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from "@mui/system/styled";
import { useAuthContext } from "../contexts/authcontext";
import { RoutePaths } from "../utils/enum";
import { useMemo } from "react";
import Shared from "../utils/Shared";

const Navull = styled("ul")`
    font-size: 19px;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding-right: 30px;
    overflow: hidden;
    background-color: #333;
    `;


const Navli = styled("li")`
    float: right;
    margin-left: 5px;

    & a{
        display: block;
        color: rgb(197, 191, 191);
        text-align: center;
        padding: 16px 16px;
        text-decoration: none;
    }
    & a:hover{
        color: white;

    }
`;




const Header = () => {
    const authContext = useAuthContext();

    const items= useMemo(()=>{
        return Shared.NavigationItems.filter(
            (item)=>!item.access.length|| item.access.includes(authContext.user.roleId)
        )
    },[authContext.user])

    return (

        <>
            <nav>
                <Navull>
                    <Navli style={{ float: "left" }} >
                        <NavLink to="">
                            <HomeIcon />
                        </NavLink>
                    </Navli>

                    {!authContext.user.id ? (
                        <Navli >
                            <NavLink to={RoutePaths.login} >login</NavLink>
                        </Navli>
                    ) :
                        <div>

                            <div class="icons">
                                <Navli  >
                                    <NavLink onClick={authContext.signOut} to={RoutePaths.login}>
                                        <AccountCircleIcon />
                                    </NavLink>

                                </Navli>
                                <Navli >
                                    <NavLink to={RoutePaths.book}>
                                        <AddShoppingCartIcon />
                                    </NavLink>
                                </Navli>
                            </div>
                            <Navli >
                                <NavLink to={RoutePaths.contact}>Contact</NavLink>
                            </Navli>
                            

                            {items.map((item,index)=>(
                                <Navli key={index}>
                                    <NavLink to={item.route}>
                                        {item.name}
                                    </NavLink>
                                </Navli>
                            ))}
                        </div>
                    }

                </Navull>

            </nav>

            <Outlet />

        </>
    )
};

export default Header;