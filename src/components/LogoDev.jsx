import Logo from 'media/LogoDev.png'
import React from 'react'
import 'styles/Logo.css'

const LogoDev = () => {
    return (
        <div className="container-logo">
            <img src={Logo} alt='Logo' />
        </div>
    )
}

export default LogoDev
