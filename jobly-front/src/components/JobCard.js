import { useState, useEffect } from "react";
import JoblyApi from "../api";

export default function JobCard() {
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
            {jobs.map(j => (
                <div key={j.id}>
                    <h2>{j.title}</h2>
                    <p>{j.companyName}</p>
                    <p>Salary: {j.salary}</p>
                    <p>Equity: {j.equity}</p>
                    <button>Apply</button>
                </div>
            ))}
        </>
    )
}