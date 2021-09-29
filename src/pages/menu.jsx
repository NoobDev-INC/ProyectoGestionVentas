import React from 'react'
import LogoV from 'media/Venta.svg'
import LogoP from 'media/Producto.svg'
import LogoU from 'media/Usuarios.svg'
import LogoB from 'media/Build.svg'

const menu = () => {
    return (
        <div>
            <ul className="flex h-screen justify-center">
                <div className="grid grid-cols-3 gap-20 place-content-center ">
                    <section className="grid  hover:bg-indigo-400 cursor-pointer">
                        <img src={LogoV} alt="Venta" />
                        <button className="border-double text-white bg-blue-500 h-10">Ventas</button>
                    </section>
                    <section className="grid  hover:bg-indigo-400 cursor-pointer">
                        <img src={LogoP} alt="Producto" />
                        <button className="border-double text-white bg-blue-500 ">Productos</button>
                    </section>
                    <section className="grid  hover:bg-indigo-400 cursor-pointer">
                        <img src={LogoU} alt="Usuarios" />
                        <button className="border-double text-white bg-blue-500 ">Usuarios</button>
                    </section>
                    <section className="grid  hover:bg-indigo-400 cursor-pointer">
                        <img src={LogoB} alt="Proximamente" />
                        <button className="border-double text-white bg-indigo-800  w-40 h-10 ">Proximamente...</button>
                    </section>
                </div>
            </ul>
        </div>
    )
}

export default menu
