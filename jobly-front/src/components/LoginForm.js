import { useState, useContext } from 'react';
import { TokenContext } from '../context/TokenContext';
import { UserContext } from "../context/UserContext";
import JoblyApi from '../api';
import Button from './Button';

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
           <form >
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                name="username" 
                id="username" 
                autoComplete='username' 
                onChange={handleChange} 
                value={username} 
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                autoComplete='current-password' 
                onChange={handleChange} 
                value={password}
            />
            <Button path='/' text='Login' func={handleSubmit} />

           </form>
        </>
    )
}