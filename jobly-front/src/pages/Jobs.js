import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchBar from "../components/SearchBar"
import JobCard from "../components/JobCard"
import JoblyApi from "../api";

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const {filteredSearch, searchParams} = useContext(SearchContext);

    useEffect(() => {
        async function fetchJobs() {
            const res = await JoblyApi.getJobs();
            setJobs([...res]);
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
            <JobCard jobs={jobs} />
        </>
    )
}