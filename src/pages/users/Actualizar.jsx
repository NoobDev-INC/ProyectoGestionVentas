import React, {useEffect} from 'react'

const Actualizar = () => {

    const enviarDatosTabla = (e) => {

    }

    return (
        <div className="flex justify-center justify-items-center">
            <form className='flex flex-col m-80'>
                <h1 className="font-bold text-3xl">Formulario para actualizar información</h1>
                <div className="flex flex-col">
                    <input type="text" placeholder='Nombre usuario'/>
                    <input type="text" placeholder='Estado'/>
                    <input type="text" placeholder='Rol'/>
                </div>
                <button onClick={enviarDatosTabla} className='bg-indigo-500 text-white'>Actualizar</button>
            </form>
        </div>
    )
}

export default Actualizar
