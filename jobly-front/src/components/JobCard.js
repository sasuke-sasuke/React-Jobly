import JobCardButton from "./JobCardButton";
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function JobCard({jobs, isTitleHidden=false}) {

    return (
        <>
            {jobs.map(j => (
                <Paper elevation={5}  sx={{my:3, px:3}} key={j.id}>
                    <Box sx={{pt:3}} >
                        <Typography variant="h5" component="h2">{j.title}</Typography>
                        {!isTitleHidden && <Typography variant="subtitle1" component='h4'>{j.companyName}</Typography>}
                    </Box>
                    <Box sx={{pt:3}} >
                        <Typography variant="subtitle1" component='p'>Salary: {j.salary}</Typography>
                        <Typography variant="subtitle1" component='p'>Equity: {j.equity}</Typography>
                    </Box>
                    <JobCardButton jobId={j.id} />
                </Paper>
            ))}
        </>
    )
}