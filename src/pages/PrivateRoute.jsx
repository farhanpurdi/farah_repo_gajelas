import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./AuthContex"

const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext)
    if(!isLoggedIn){
        // arahkan ke halaman login
        return <Navigate to='/login' />
    }

    // arahkan ke halaman private nya 
    return <Outlet />
}

export default PrivateRoute