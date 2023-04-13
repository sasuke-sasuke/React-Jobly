import {Link} from "react-router-dom";
import './CompanyCard.css';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

export default function CompanyCard({companies}) {

    return (
        <>
            {companies.map(c => (
                <Paper key={crypto.randomUUID()} elevation={5} sx={{my: 3, p: 3}} >
                    <Link className="CompanyCard" to={`/companies/${c.handle}`}>
                        <Box>
                            <Typography variant="h4" component="h2" sx={{marginBottom: 1}}>{c.name}</Typography>
                            <Typography paragraph variant="body2" component="p">{c.description}</Typography>
                        </Box>
                    </Link>
                </Paper>
                
            ))}
        </>
    )
}