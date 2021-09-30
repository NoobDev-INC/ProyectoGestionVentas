import React from 'react'
import LogoDev from 'components/LogoDev'


const Header = () => {
    return (
        <div>
            <ul className="Navbar flex bg-blue-500  justify-between">
                <LogoDev/>
                <li className="text-5xl font-semibold">BIENVENIDO</li>
                <li className="m-2">Perfil</li>
            </ul>
        </div>
    )
}

export default Header
