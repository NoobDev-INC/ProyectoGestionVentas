import React from 'react'
import { ReactComponent as LogoAI } from 'media/ActualizarUser.svg'
import { ReactComponent as LogoVI } from 'media/VerUser.svg'
import { Link } from 'react-router-dom'
import 'styles/styles.css'

const Usuarios = () => {
    return (
        <ul className="menu">
            <div className="menu-container">
                <div className="items-file">
                    <Link to= "/Informacion">
                        <section className="container-item">
                            <LogoVI/>
                            <p className="item-button">Ver información</p>
                        </section>
                    </Link>
                    <Link to= "/Actualizar">
                        <section className="container-item">
                            <LogoAI/>
                            <p className="item-button">Actualizar datos</p>
                        </section>
                    </Link>
                </div>
            </div>
        </ul >
    )
}

export default Usuarios
