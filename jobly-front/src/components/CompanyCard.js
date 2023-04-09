import {useState, useEffect} from 'react';
import JoblyApi from '../api';

export default function CompanyCard() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function fetchCompanies() {
            const res = await JoblyApi.getCompanies();
            setCompanies([...res]);
        }
        fetchCompanies();
    }, []);

    

    return (
        <>
            {companies.map(c => (
                <div key={crypto.randomUUID()}>
                    <h2>{c.name}</h2>
                    <p>{c.description}</p>
                </div>
            ))}
        </>
    )
}