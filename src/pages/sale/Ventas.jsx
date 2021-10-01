import React from 'react'
import { ReactComponent as LogoAIV } from 'media/ActualizarV.svg'
import { ReactComponent as LogoVIV } from 'media/InformacionV.svg'
import { ReactComponent as LogoBIV } from 'media/BuscarV.svg'
import { Link } from 'react-router-dom'
import 'styles/styles.css'

const Ventas = () => {
    return (
        <ul className="menu">
            <div className="menu-container">
                <div className="items-file">
                    <Link to= "/InformacionV">
                        <section className="container-item">
                            <LogoVIV/>
                            <p className="item-button">Ver información</p>
                        </section>
                    </Link>
                    <Link to= "/ActualizarV">
                        <section className="container-item">
                            <LogoAIV/>
                            <p className="item-button">Actualizar ventas</p>
                        </section>
                    </Link>
                    <Link to= "/BuscarV">
                        <section className="container-item">
                            <LogoBIV/>
                            <p className="item-button">Buscar información</p>
                        </section>
                    </Link>
                </div>
            </div>
        </ul >
    )
}

export default Ventas
