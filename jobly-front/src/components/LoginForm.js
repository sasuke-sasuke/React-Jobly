import { useState, useContext } from 'react';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from "../context/UserContext";
import JoblyApi from '../api';
import Button from './Button';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setToken} = useContext(TokenContext);
    const {setCurrentUser} = useContext(UserContext);

    function handleChange(evt) {
        (evt.target.name === 'username')? setUsername(evt.target.value)
        : setPassword(evt.target.value)
     }

     async function handleSubmit(evt) {
        try {
            const token = await JoblyApi.loginUser(username, password);
            setToken(token);
            setCurrentUser(username);
        } catch (err) {
            console.error(err);
        }
     }

    return (
        <>
        <Paper elevation={3} sx={{p:2, mt:1}} >
            <Box component='form' >
                <InputLabel htmlFor="username">Username</InputLabel>
                <TextField
                    fullWidth 
                    type="text" 
                    name="username" 
                    id="username" 
                    autoComplete='username' 
                    onChange={handleChange} 
                    value={username} 
                    sx={{mb:2}}
                    InputProps={{ sx: { height: 50 } }}
                />
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                    fullWidth 
                    type="password" 
                    name="password" 
                    id="password" 
                    autoComplete='current-password' 
                    onChange={handleChange} 
                    value={password}
                    sx={{mb:2}}
                    InputProps={{ sx: { height: 50 } }}
                />
                <Box className='EditForm-button' sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button path='/' text='Login' func={handleSubmit} />
                </Box>

           </Box>
        </Paper>
        </>
    )
}