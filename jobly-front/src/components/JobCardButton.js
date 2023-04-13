import {useState, useEffect} from 'react';
import useToggle from "../hooks/useToggle"
import './JobCardButton.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function JobCardButton({jobId}) {
    const [hasApplied, toggle ] = useToggle(false)
    const [isStored, setIsStored] = useState(false)

    useEffect(() => {
        const storedState = window.localStorage.getItem(`job-${jobId}-applied`)
        if (storedState !== null) {
            toggle(storedState === 'true')
            setIsStored(true)
        }
    }, [jobId, toggle])

    function handleClick() {
        toggle();
        window.localStorage.setItem(`job-${jobId}-applied`, (!hasApplied).toString())
        setIsStored(true)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'end', pb:1 }} >
            
            {isStored && hasApplied?
                <Button className='JobCardButton-applied' variant='contained' color='error' onClick={handleClick}>
                     Applied 
                </Button>
                     : 
                <Button className='JobCardButton-apply' variant='contained' color='error' onClick={handleClick}>
                     Apply 
                </Button>
            }
            
        </Box>
    )
}