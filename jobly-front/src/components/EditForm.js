import { useState, useEffect} from "react";
import JoblyApi from "../api";
import Button from "./Button";
import './EditForm.css';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

export default function EditForm() {
    const user = JSON.parse(window.localStorage.getItem("user"));

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    async function getUserInfo() {
        const res = await JoblyApi.getUser(user);
        const {firstName, lastName, email} = res;
        setFormData({
            firstName,
            lastName,
            email
        })
    }

    function handleChange(evt) {
        setFormData({
              ...formData,
                [evt.target.name]: evt.target.value
            }
        );
    }

    async function handleSubmit(evt) {
        await JoblyApi.patchUser(user, formData);
    }

    useEffect(() => {
        getUserInfo();
    }, []);

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
                    value={user} 
                    disabled={true}
                    sx={{mb:2}}
                    InputProps={{ sx: { height: 50 } }}
                />
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <TextField 
                    fullWidth
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete='firstName'
                    onChange={handleChange}
                    value={formData.firstName}
                    sx={{mb:2}}
                    InputProps={{ sx: { height: 50 } }}
                />
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <TextField 
                    fullWidth
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete='lastName'
                    onChange={handleChange}
                    value={formData.lastName}
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
                <Box className='EditForm-button' sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button path='/' text='Save Changes' func={handleSubmit} />
                </Box>

            </Box>
        </Paper>
            
        </>
    )
}