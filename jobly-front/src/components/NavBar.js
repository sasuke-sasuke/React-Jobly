import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";
import { UserContext } from "../context/UserContext";
import {NavLink} from "react-router-dom";


export default function NavBar() {
    const {setToken, removeToken} = useContext(TokenContext);
    const { currentUser, setCurrentUser, removeUser } = useContext(UserContext);
    
    const handleLogout = () => {
        removeToken();
        removeUser();
        setCurrentUser('');
        setToken('')
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' >Jobly</NavLink>
                </li>
                {currentUser ? 
                <>
                    <li>
                        <NavLink to='/companies'>Companies</NavLink>
                    </li>
                    <li>
                        <NavLink to='/jobs'>Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleLogout} to='/'>Logout {currentUser}</NavLink>
                    </li>
                </>
                
                 :
                 <>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>Signup</NavLink></li>
                 </>
                 }
                
                
                
                
            </ul>
        </nav>
    )
}