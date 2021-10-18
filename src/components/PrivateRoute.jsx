import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute=({children})=>{
    const {user,isAuthenticated,isloading}=useAuth0();
    
    if (isloading) return <div>loading...</div>;

    return isAuthenticated ?(
        <>{children}</>
    ):(
        <div className='text-9xl text-red-500'>No estas autorizado para ver este sitio</div>
        
    )
};
export default PrivateRoute;