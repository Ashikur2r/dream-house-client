import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "keep-react";


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()
    if (loading){
        return <Spinner color="failure" size="lg" />
    }
    if (user){
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;