import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout(){
    let token = localStorage.getItem('sdtoken');
    if(token){
        return <Navigate to='/' replace/>
    }
    return (
        <>
            <Outlet></Outlet>
        </>
    )
}