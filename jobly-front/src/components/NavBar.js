import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <NavLink to='/' >Jobly</NavLink>
                <NavLink to='/companies'>Companies</NavLink>
                <NavLink to='/jobs'>Jobs</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/logout'>Logout</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </ul>
        </nav>
    )
}