import { useAppContext } from "../../context";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
    const {LogoutUser} = useAppContext()
console.log("LogoutUser: ",LogoutUser)
    useEffect(()=>{
        LogoutUser()
    },[LogoutUser]);
    return(
        LogoutUser?
        <Navigate to="/"/>:
        <Navigate to="/login"/>
    ) 
}
export default Logout;
