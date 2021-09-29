import React from 'react'
import LogoHome from 'media/Home.svg'
import { Link } from 'react-router-dom'
const InternNavbar = () => {
    return (
        <div>
            <Link to= "/menu">
                <ul className="Navbar flex bg-blue-500  justify-between">
                    <img className='h-16 w-50' src={LogoHome} alt='Home' />
                    <li className="m-2">Perfil</li>
                </ul>
            </Link>
        </div>    
    )
}
export default InternNavbar
