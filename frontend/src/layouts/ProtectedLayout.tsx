import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout(){
    let token = localStorage.getItem('sdtoken');
    if(!token){
        return <Navigate to='/auth' replace/>
    }
    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}