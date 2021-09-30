import React from 'react'
import LogoHome from 'media/Home.svg'
import { Link } from 'react-router-dom'
const InternNavbar = () => {
    return (
        <div>
            <ul className="Navbar flex bg-blue-500  justify-between h-16">
                <Link to= "/menu">
                    <img className='h-12 w-50 m-3' src={LogoHome} alt='Home' />
                </Link>
                <li className="m-2">Perfil</li>
            </ul>
        </div>    
    )
}
export default InternNavbar
