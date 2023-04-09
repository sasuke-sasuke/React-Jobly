import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Button from "../components/Button"

export default function Homepage() {
    const { currentUser } = useContext(UserContext)
    return (
        <>
            <h1>Jobly</h1>
            <p>All the jobs in one convient place</p>
            {currentUser ? <h2>Welcome Back, {currentUser}</h2> 
            : 
            <>
                <Button path='/signup' text='Sign Up'/>
                <Button path='/login' text='Log In'/>
            </> }
        </>
    )
}