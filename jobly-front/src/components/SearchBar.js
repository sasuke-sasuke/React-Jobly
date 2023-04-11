import {useState, useContext} from 'react';
import { SearchContext } from '../context/SearchContext';
import useDebounce from '../hooks/useDebounce';

export default function SearchBar({searchFunc}) {
    const [term, setTerm] = useState('');
    const {setFilteredSearch, setSearchParams} = useContext(SearchContext);
    
    useDebounce(() => {
        fetchFilteredSearch();
    }, 1000, [term])

    async function fetchFilteredSearch() {
        const res = await searchFunc();
        setFilteredSearch([...res]);
    }

    function handleChange(evt){
        setTerm(evt.target.value);
        setSearchParams(term);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        setSearchParams(term);
        fetchFilteredSearch();
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