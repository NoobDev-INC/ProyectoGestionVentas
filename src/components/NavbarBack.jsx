import React, { useEffect } from 'react'
import LogoBack from 'components/LogoBack'
import { useHistory } from 'react-router-dom'

const NavbarBack = ({ route }) => {
    const location = useHistory()
    useEffect(() => {
        console.log('LOCATION:', location)
    }, [location])
    return (
        <div>
            <ul className="Navbar flex bg-blue-500  justify-between h-16">
                <a onClick={() => location.goBack()}>
                    <LogoBack/>
                </a>
                <li className="m-2">Perfil</li>
            </ul>
        </div>
    )
}
export default NavbarBack
