import {useState} from 'react';

export default function SearchBar() {
    const [term, setTerm] = useState('');

    function handleChange(evt){
        setTerm(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
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