import React from 'react'
import LogoHome from 'components/LogoHome'
import { Link } from 'react-router-dom'
const InternNavbar = () => {
    return (
        <div>
            <ul className="Navbar flex bg-blue-500  justify-between h-16">
                <Link to= "/menu">
                    <LogoHome/>
                </Link>
                <li className="m-2">Perfil</li>
            </ul>
        </div>    
    )
}
export default InternNavbar
