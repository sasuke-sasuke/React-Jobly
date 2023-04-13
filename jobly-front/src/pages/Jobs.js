import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchBar from "../components/SearchBar"
import JobCard from "../components/JobCard"
import JoblyApi from "../api";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {filteredSearch, searchParams} = useContext(SearchContext);

    useEffect(() => {
        async function fetchJobs() {
            const res = await JoblyApi.getJobs();
            setJobs([...res]);
            setIsLoading(false);
        }
        fetchJobs();
    }, [])

    useEffect(() => {
        if (filteredSearch.length === 0) return;
        setJobs([...filteredSearch]);
    }, [filteredSearch]);

    async function handleChildSearch () {
        return await JoblyApi.filterJobs(searchParams) 
    }

    return (
        <>
            <SearchBar searchFunc={handleChildSearch} />
            {isLoading ? 
                <Box sx={{display: 'flex', justifyContent: 'center', mt:10 }}>
                    <CircularProgress size={100} />
                </Box> 
                : 
                <JobCard jobs={jobs} /> }
        </>
    )
}