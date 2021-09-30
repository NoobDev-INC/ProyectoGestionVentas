import React from 'react'
import Logo from 'media/LogoDev.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul className="Navbar flex bg-blue-500  justify-between">
                <img className='h-20 w-70' src={Logo} alt='Workflow' />
                <Link to='Login'>
                    <button className="bg-indigo-500 my-4 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700 h-10 w-25">Iniciar Sesión</button>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar


