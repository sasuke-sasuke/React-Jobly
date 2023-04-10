import { useState, useContext } from 'react';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from '../context/UserContext';
import JoblyApi from '../api';
import Button from './Button';

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
           <form>
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                name="username" 
                id="username" 
                autoComplete='username' 
                onChange={handleChange} 
                value={formData.username} 
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                autoComplete='current-password' 
                onChange={handleChange} 
                value={formData.password}
            />
            <label htmlFor="fname">First Name</label>
            <input
                type="text"
                name="fname"
                id="fname"
                autoComplete='fname'
                onChange={handleChange}
                value={formData.fname}
            />
            <label htmlFor="lname">Last Name</label>
            <input
                type="text"
                name="lname"
                id="lname"
                autoComplete='lname'
                onChange={handleChange}
                value={formData.lname}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                autoComplete='email'
                onChange={handleChange}
                value={formData.email}
            />

            <Button path='/' text='Sign Up' func={handleSubmit} />

           </form>
        </>
    )
}