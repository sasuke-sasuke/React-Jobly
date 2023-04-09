import { Link } from "react-router-dom";


export default function Button({path, text, func}) {
    return (
        <>
            <Link to={path} onClick={func} >{text}</Link>
        </>
    )
}