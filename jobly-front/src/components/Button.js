import { Link } from "react-router-dom";
import {Button as Btn} from "@mui/material";
import './Button.css'


export default function Button({path, text, func}) {
    return (
        <>
            <Btn className="Button-homepage" variant="contained" sx={{m:2}}>
                <Link to={path} onClick={func} >{text}</Link>
            </Btn>
            
        </>
    )
}