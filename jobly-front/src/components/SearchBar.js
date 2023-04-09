import {useState} from 'react';

export default function SearchBar() {
    const [term, setTerm] = useState('');

    function handleChange(evt){
        setTerm(evt.target.value);
    }

    return (
        <>
            <form >
                <input type="text" placeholder="Search" onChange={handleChange} value={term} />
                <button type='submit '>Submit</button>
            </form>
        </>
    )
}