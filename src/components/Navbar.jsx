import React from 'react'
import LogoDev from 'components/LogoDev'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react/cjs/react.development';
import "styles/Navbar.css"

const Navbar = () => {
    const history = useHistory()
    const location = useLocation()
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="container-navbar">
            <ul className="Navbar flex bg-blue-500  justify-between" style={{ height: '100%' }}>
                <div className="navbar-go-back">
                    {location.pathname === '/menu' || location.pathname === '/' || location.pathname === '/Login' ?
                        <LogoDev /> :
                        <a onClick={() => history.goBack()} style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '5px', paddingBottom: '5px' }}>
                            <ImHome size="2.5rem" />
                        </a>
                    }
                </div>
                <div className="navbar-user">
                    <button onClick={() => loginWithRedirect()} className="bg-indigo-500 my-4 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700 h-10 w-25">Iniciar Sesión</button>
                    
                </div>


            </ul>
        </div>
    )
}

export default Navbar


