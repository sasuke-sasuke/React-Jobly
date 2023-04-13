import EditForm from "../components/EditForm"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function Profile() {
    return (
        <>
        <Container maxWidth='sm' sx={{mt: 5}}>
            <Typography variant="h4" component="h2">Profile</Typography>
            <EditForm />
        </Container>
        </>
    )
}