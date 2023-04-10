import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar"
import JobCard from "../components/JobCard"
import JoblyApi from "../api";

export default function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            const res = await JoblyApi.getJobs();
            setJobs([...res]);
        }
        fetchJobs();
    }, [])

    return (
        <>
            <SearchBar />
            <JobCard jobs={jobs} />
        </>
    )
}