import React, { useLayoutEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react/cjs/react.development';

const PrivateRoute = (children) => {
    const {isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    
    useEffect(() => {
         const fecthAut0Token =async () =>{
             const accessToken = await  getAccessTokenSilently({
                //audience: `api-autenticacion-gestor-ventas`,
                audience : 'https://proyecto-ventas.us.auth0.com/api/v2/',
            });
            localStorage.setItem("token",accessToken);
            console.log(accessToken);
            await obtenerDatosUsuario(
                (response) => {
                    console.log('response', response);
                },
                (err) => {
                    console.log('err', err);
                }
            );
         };
         if(isAuthenticated){
            fecthAut0Token();
         } 
    }, [isAuthenticated, getAccessTokenSilently]);

    if(isLoading) return <div>Loading..</div>
    
    if(!isAuthenticated){
        return loginWithRedirect();
    }

    return <>{children}</>

};

export default PrivateRoute