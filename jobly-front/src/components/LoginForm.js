import { useState } from 'react';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(evt) {
        (evt.target.name === 'username')? setUsername(evt.target.value)
        : setPassword(evt.target.value)
     }

     function handleSubmit(evt) {
        evt.preventDefault();
        
     }

    return (
        <>
           <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>

           </form>
        </>
    )
}