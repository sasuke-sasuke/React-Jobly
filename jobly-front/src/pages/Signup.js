import SignupForm from "../components/SignupForm"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function Signup() {
    return (
        <>
        <Container maxWidth='sm' sx={{mt: 5}}>
        <Typography variant="h4" component="h2">Signup Form</Typography>
            <SignupForm />
        </Container>
        </>
    )
}