import React from 'react'
import { ReactComponent as LogoAIV } from 'media/ActualizarV.svg'
import { ReactComponent as LogoVIV } from 'media/InformacionV.svg'
import { ReactComponent as LogoBIV } from 'media/BuscarV.svg'
import { Link } from 'react-router-dom'
import 'styles/styles.css'

const ventas = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-800'>
        Verificar información de las ventas
        </h2>
        <h3 className=' mt-8 text-center  font-extrabold text-gray-400'>
            Puede realizar la busqueda mediante alguna opcion que se visualiza en pantalla
        </h3>
        <form className='mt-8 max-w-md'>
            <label className='flex flex-col text-center' >
                Identificador de venta
                <input
                    className='bg-gray-50 border text-center border-gray-600 p-2 rounded-xl m-2'
                    type='texto'
                    placeholder='Identificador'
                />
            </label>
            <label className='flex flex-col text-center' >
                Documento de identidad
                <input
                    className='bg-gray-50 border text-center border-gray-600 p-2 rounded-xl m-2'
                    type='text'
                    placeholder='Documento'
                />
            </label>
            <label className='flex flex-col text-center' >
                Nombre del cliente
                <input
                    className='bg-gray-50 border text-center border-gray-600 p-2 rounded-xl m-2'
                    type='text'
                    placeholder='Nombre'
                />
            </label>
            <button
                type='submit'
                className=' bg-gray-50 border  border-gray-600 p-2 rounded-xl m-2'
            >
                Buscar informacion ventas
            </button>
        </form>
    </div>    
  );
};


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
