import {useState, useEffect} from 'react';
import useToggle from "../hooks/useToggle"

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
        <button onClick={handleClick}>
            {isStored && hasApplied? "Applied" : "Apply"}
        </button>
    )
}