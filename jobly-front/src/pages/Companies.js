import {useState, useEffect, useContext} from 'react';
import { SearchContext } from '../context/SearchContext';
import JoblyApi from '../api';
import SearchBar from "../components/SearchBar";
import CompanyCard from "../components/CompanyCard";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Companies() {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {filteredSearch, searchParams} = useContext(SearchContext);

    useEffect(() => {
        async function fetchCompanies() {
            const res = await JoblyApi.getCompanies();
            setCompanies([...res]);
            setIsLoading(false);
        }
        fetchCompanies();
    }, []);

    useEffect(() => {
        if (filteredSearch.length === 0) return;
        setCompanies([...filteredSearch]);
    }, [filteredSearch]);

    async function handleChildSearch () {
        const data = await JoblyApi.filterCompanies(searchParams) 
        return data;
    }


    return (
        <>
            <SearchBar searchFunc={handleChildSearch} />
            {isLoading ? 
                <Box sx={{display: 'flex', justifyContent: 'center', mt:10 }}>
                    <CircularProgress size={100} />
                </Box>  
                : 
                <CompanyCard companies={companies} />}
        </>
    )
}