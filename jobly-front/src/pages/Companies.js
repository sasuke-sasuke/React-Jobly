import {useState, useEffect, useContext} from 'react';
import { SearchContext } from '../context/SearchContext';
import JoblyApi from '../api';
import SearchBar from "../components/SearchBar"
import CompanyCard from "../components/CompanyCard"

export default function Companies() {
    const [companies, setCompanies] = useState([]);
    const {filteredSearch, searchParams} = useContext(SearchContext);

    useEffect(() => {
        async function fetchCompanies() {
            const res = await JoblyApi.getCompanies();
            setCompanies([...res]);
        }
        fetchCompanies();
    }, []);

    useEffect(() => {
        if (filteredSearch.length === 0) return;
        setCompanies([...filteredSearch]);
    }, [filteredSearch]);

    async function handleChildSearch () {
        return await JoblyApi.filterCompanies(searchParams) 
    }


    return (
        <>
            <SearchBar searchFunc={handleChildSearch} />
            <CompanyCard companies={companies} />
        </>
    )
}