import React from 'react'
import { ReactComponent as LogoV } from 'media/Venta.svg'
import { ReactComponent as LogoP } from 'media/Producto.svg'
import { ReactComponent as LogoU } from 'media/Usuarios.svg'
import { ReactComponent as LogoB } from 'media/Build.svg'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const menu = () => {
    return (
        <ul className="menu">
            <div className="menu-container">
                <div className="items-file">
                    <Link to= "/Ventas">
                        <section className="container-item">
                            <LogoV />
                            <p className="item-button">Ventas</p>
                        </section>
                    </Link>
                    <section className="container-item">
                        <LogoP />
                        <p className="item-button">Productos</p>
                    </section>
                    <section className="container-item">
                        <LogoU />
                        <p className="item-button">Usuarios</p>
                    </section>
                </div>
                <div className="items-file">
                    <section className="container-item">
                        <LogoB />
                        <p className="item-button">Proximamente...</p>
                    </section>
                    <section className="container-item">
                        <LogoB />
                        <p className="item-button">Proximamente...</p>
                    </section>
                    <section className="container-item">
                        <LogoB />
                        <p className="item-button">Proximamente...</p>
                    </section>
                </div>
            </div>
        </ul >
    )
}

export default menu