import React from 'react'
import Logo from 'media/LogoDev.png'

const Header = () => {
    return (
        <div>
            <ul className="Navbar flex bg-blue-500  justify-between">
                <img className='h-20 w-70' src={Logo} alt='Workflow' />
                <li className="text-5xl font-semibold">BIENVENIDO</li>
                <li className="m-2">Perfil</li>
            </ul>
        </div>
    )
}

export default Header
