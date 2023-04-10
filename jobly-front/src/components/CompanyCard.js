import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
                <Link key={crypto.randomUUID()} to={`/companies/${c.handle}`}>
                    <div>
                        <h2>{c.name}</h2>
                        <p>{c.description}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}