import React from 'react'
import LogoBack from 'components/LogoBack'
import { Link } from 'react-router-dom'
const  NavbarBack = () => {
    return (
        <div>
            <ul className="Navbar flex bg-blue-500  justify-between h-16">
                <Link to= "/Ventas">
                    <LogoBack/>
                </Link>
                <li className="m-2">Perfil</li>
            </ul>
        </div>    
    )
}
export default NavbarBack
