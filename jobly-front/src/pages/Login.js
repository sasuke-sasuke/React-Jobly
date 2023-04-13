import LoginForm from "../components/LoginForm"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function Login() {
    
    
    return (
        <>
        <Container maxWidth="sm" sx={{mt: 5}}>
            <Typography variant="h4" component="h2">Log In</Typography>
           <LoginForm />
        </Container>
        </>
    )
}