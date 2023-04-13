import { useState, useContext } from 'react';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';
import JoblyApi from '../api';
import Button from './Button';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';


export default function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        fname: '',
        lname: '',
        email: ''
    });
    const {setToken} = useContext(TokenContext);
    const {setCurrentUser} = useContext(UserContext);


    /** Handle change updating formdata state */
    function handleChange(evt) {
        setFormData({
              ...formData,
                [evt.target.name]: evt.target.value
            }
        );
    }

     async function handleSubmit(evt) {
        try {
            const token = await JoblyApi.signupUser(formData.username, formData.password, formData.fname, formData.lname, formData.email)
            setToken(token);
            setCurrentUser(formData.username);  
        } catch (err) {
            console.error(err);
        }
     }

    return (
        <>
        <Paper elevation={3} sx={{p:2, mt:1}} >
           <Box component='form'>
            <InputLabel htmlFor="username">Username</InputLabel>
            <TextField
                fullWidth  
                type="text" 
                name="username" 
                id="username" 
                autoComplete='username' 
                onChange={handleChange} 
                value={formData.username} 
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
                value={formData.password}
                sx={{mb:2}}
                InputProps={{ sx: { height: 50 } }}
            />
            <InputLabel htmlFor="fname">First Name</InputLabel>
            <TextField
                fullWidth 
                type="text"
                name="fname"
                id="fname"
                autoComplete='fname'
                onChange={handleChange}
                value={formData.fname}
                sx={{mb:2}}
                InputProps={{ sx: { height: 50 } }}
            />
            <InputLabel htmlFor="lname">Last Name</InputLabel>
            <TextField
                fullWidth 
                type="text"
                name="lname"
                id="lname"
                autoComplete='lname'
                onChange={handleChange}
                value={formData.lname}
                sx={{mb:2}}
                InputProps={{ sx: { height: 50 } }}
            />
            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField
                fullWidth 
                type="email"
                name="email"
                id="email"
                autoComplete='email'
                onChange={handleChange}
                value={formData.email}
                sx={{mb:2}}
                InputProps={{ sx: { height: 50 } }}
            />

            <Box className='EditForm-button' sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button path='/' text='Sign Up' func={handleSubmit} />
            </Box>

           </Box>
        </Paper>
        </>
    )
}