import { useState } from 'react';

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');

    function handleChange(evt) {
        switch (evt.target.name) {
            case 'username':
                setUsername(evt.target.value);
                break;
            case 'password':
                setPassword(evt.target.value);
                break;
            case 'fname':
                setFname(evt.target.value);
                break;
            case 'lname':
                setLname(evt.target.value);
                break;
            case 'email':
                setEmail(evt.target.value);
                break;
            default:
                break;
        }
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
            <label htmlFor="fname">First Name</label>
            <input
                type="text"
                name="fname"
                id="fname"
                autoComplete='fname'
                onChange={handleChange}
                value={fname}
            />
            <label htmlFor="lname">Last Name</label>
            <input
                type="text"
                name="lname"
                id="lname"
                autoComplete='lname'
                onChange={handleChange}
                value={lname}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                autoComplete='email'
                onChange={handleChange}
                value={email}
            />

            <button type="submit">Login</button>

           </form>
        </>
    )
}