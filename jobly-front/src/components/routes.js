import {Routes, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Companies from '../pages/Companies';
import Jobs from '../pages/Jobs';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path='/companies' element={<Companies/>} />
                <Route path='companies:handle' element={<Companies/>} />
                <Route path='/jobs' element={<Jobs/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />

            </Routes>
        </>
    )
}