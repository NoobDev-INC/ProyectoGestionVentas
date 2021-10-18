import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute=({children})=>{
    const {user,isAuthenticated, isloading}=useAuth0();
    
    if (isloading) return <div>loading...</div>;

    if (!isAuthenticated){
        return loginWithdiRedirect();
    }
    return <>{children}</>;
};
export default PrivateRoute;