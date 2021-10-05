import React from 'react'
import LogoDev from 'components/LogoDev'
import { Link, useHistory } from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";
import { ImHome } from "react-icons/im";


const Navbar = () => {
    const history = useHistory()
    return (
        <div>
            <ul className="Navbar flex bg-blue-500  justify-between" style={{ height: '100%' }}>
                {history.location.pathname === '/menu' || history.location.pathname === '/' ?
                    <LogoDev /> :
                    <a onClick={() => history.goBack()} style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ImHome size="3rem" />
                    </a>
                }
                <Link to='Login'>
                    <button className="bg-indigo-500 my-4 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700 h-10 w-25">Iniciar Sesión</button>
                </Link>


            </ul>
        </div>
    )
}

export default Navbar


