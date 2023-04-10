import { useState, useEffect} from "react";
import JoblyApi from "../api";
import Button from "./Button";

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
            <form>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    autoComplete='username' 
                    onChange={handleChange} 
                    value={user} 
                    disabled={true}
                />
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete='firstName'
                    onChange={handleChange}
                    value={formData.firstName}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete='lastName'
                    onChange={handleChange}
                    value={formData.lastName}
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

                <Button path='/' text='Edit' func={handleSubmit} />

            </form>
        </>
    )
}