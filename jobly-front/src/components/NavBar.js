import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";
import { UserContext } from "../context/UserContext";
import {NavLink} from "react-router-dom";
import './NavBar.css';
import jobsLogo from "../jobs.svg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


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
        <AppBar position="static">
            <Toolbar>
                <IconButton href="/" edge="start" sx={{mr: 1}}>
                <img src={jobsLogo} alt="logo" height={30} width={30}/>    
                </IconButton>    
                <Typography className="NavBar-link" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     <NavLink to='/' >Jobly</NavLink>
                </Typography>
                <Box>
                    {currentUser ? 
                        <>
                            <Button className="NavBar-link" sx={{mr: 1}} >
                                <NavLink to='/companies'>Companies</NavLink>
                            </Button>
                            <Button className="NavBar-link" sx={{mr: 1}} >
                                <NavLink to='/jobs'>Jobs</NavLink>
                            </Button>
                            <Button className="NavBar-link" sx={{mr: 1}} >
                                <NavLink to={`/profile/${currentUser}`}>Profile</NavLink>
                            </Button>
                            <Button className="NavBar-link" sx={{mr: 1}} >
                                <NavLink onClick={handleLogout} to='/'>Logout {currentUser}</NavLink>
                            </Button>
                                           
                        </>
                        :
                        <>
                         <Button className="NavBar-link" sx={{mr: 1}} >
                            <NavLink to='/login'>Login</NavLink>
                         </Button>
                         <Button className="NavBar-link" sx={{mr: 1}} >
                            <NavLink to='/signup'>Signup</NavLink>
                         </Button>
                        </>
                    }    
                </Box>   
                    
                
            </Toolbar>
        </AppBar>
    )
}