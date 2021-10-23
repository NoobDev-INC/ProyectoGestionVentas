import React,{useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {ReactLoading} from 'react-loading';
import {obtenerDatosUsuario} from 'utils/api';
const PrivateLayout=({children})=>{
    const {isAuthenticated,isloading,getAccessTokenSilently}=useAuth0();

    useEffect(()=>{
        console.log(isAuthenticated)
        
        const fetchAuth0Token=async()=>{
            try{
                const accessToken = await getAccessTokenSilently({
                    audience: `api-autenticacion-gestor-ventas`
    
                });
                console.log('mi token', accessToken)
                //2.Recibir token de auth 0
                localStorage.setItem('token',accessToken);
                console.log(accessToken);
                //3. enviarle el token al backend
                await obtenerDatosUsuario((response)=>{
                        console.log('response',response);
                    },
                    (err)=>{
                        console.log('err',err);
                    }    
                );
            }catch(err){console.log('Mi error',err)}
            //1.Pedir token a auth0
            
            
        };
        if (isAuthenticated){
            fetchAuth0Token();

        }
        
    },[isAuthenticated,getAccessTokenSilently]);
    
    if (isloading) return <ReactLoading type="cylon" color='#abc123' height={667} width={375} />

    return isAuthenticated ?(
        <>{children}</>
    ):(
        <div className='text-9xl text-red-500'>No estas autorizado para ver este sitio</div>
        
    )
};
export default PrivateLayout;