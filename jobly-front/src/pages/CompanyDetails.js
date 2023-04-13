import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import JobCard from "../components/JobCard";
import JoblyApi from '../api';
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

export default function CompanyDetails(){
    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {handle} = useParams();

    useEffect(() => {
        async function fetchCompanyDetails() {
            const res = await JoblyApi.getCompany(handle);
            setCompany(res);
            setJobs(res.jobs);
            setIsLoading(false);
        }
        fetchCompanyDetails();
    }, []);

    return(
        <>
            <Typography variant='h2' component='h1' sx={{mt:5}}>{company.name}</Typography>
            <Typography paragraph variant='body1' component='p' sx={{mb:1}}>{company.description}</Typography>
            {isLoading ? 
                <Box sx={{display: 'flex', justifyContent: 'center', mt:10 }}>
                    <CircularProgress size={100} />
                </Box> 
                : 
                <JobCard jobs={jobs} isTitleHidden={true} /> }
        </>
    )

}