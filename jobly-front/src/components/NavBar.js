import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {NavLink, Navigate} from "react-router-dom";


export default function NavBar() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    
    const handleLogout = () => {
        setCurrentUser(null);
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