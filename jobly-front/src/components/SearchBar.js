import {useState, useContext} from 'react';
import { SearchContext } from '../context/SearchContext';
import useDebounce from '../hooks/useDebounce';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <Box
            sx={{my: 4}} 
            autoComplete="off"
            onSubmit={handleSubmit}
        >
                <TextField 
                    sx={{width: '75%', padding: '0', backgroundColor: 'white'}}
                    InputProps={{ sx: { height: 50 } }} 
                    type='text'  
                    onChange={handleChange} 
                    value={term} 
                    label="Search" />
                <Button type='submit' variant='contained' sx={{mx:1, height: 50}}>Submit</Button>
        </Box>  
        </>
    )
}