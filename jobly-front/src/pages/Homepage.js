import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Button from "../components/Button"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

export default function Homepage() {
    const { currentUser } = useContext(UserContext)
    return (
        <Container align="center">
            <Box marginY={20}>
            <>
                <Typography variant='h1'>Jobly</Typography>
                <Typography variant="h6" component="p">All the jobs in one convient place</Typography>
                {currentUser ? <Typography variant="h4">Welcome Back, {currentUser}!</Typography> 
                : 
                <>
                    <Button path='/signup' text='Sign Up'/>
                    <Button path='/login' text='Log In'/>
                </> }
            </>
            </Box>
            
        </Container>
        
    )
}