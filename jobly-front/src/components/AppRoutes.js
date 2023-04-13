import {Routes, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Companies from '../pages/Companies';
import CompanyDetails from '../pages/CompanyDetails';
import Jobs from '../pages/Jobs';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Login/>} />
                <Route element={<PrivateRoute/>} >
                    <Route path='/companies' element={<Companies/>} />
                    <Route path='/companies/:handle' element={<CompanyDetails/>} />
                    <Route path='/jobs' element={<Jobs/>} />
                    <Route path='/profile/:user' element={<Profile/>} />
                </Route>
                

            </Routes>
        </>
    )
}