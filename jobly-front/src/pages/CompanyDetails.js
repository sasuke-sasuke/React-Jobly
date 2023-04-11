import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import JobCard from "../components/JobCard";
import JoblyApi from '../api';

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
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            {isLoading ? <div>Loading...</div> : <JobCard jobs={jobs} isTitleHidden={true} /> }
        </>
    )

}