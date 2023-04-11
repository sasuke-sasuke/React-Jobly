import {useState, useContext} from 'react';
import { SearchContext } from '../context/SearchContext';
import useDebounce from '../hooks/useDebounce';
import JoblyApi from '../api';

export default function SearchBar() {
    const [term, setTerm] = useState('');
    const {setFilteredSearch} = useContext(SearchContext);
    
    useDebounce(() => {
        fetchFilteredCompanies();
    }, 1000, [term])

    async function fetchFilteredCompanies() {
        const res = await JoblyApi.filterCompanies(term)
        setFilteredSearch([...res]);
    }

    function handleChange(evt){
        setTerm(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        fetchFilteredCompanies();
        setTerm('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" onChange={handleChange} value={term} />
                <button type='submit '>Submit</button>
            </form>
        </>
    )
}