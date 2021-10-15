import React, {useEffect} from 'react'
import { ToastContainer, toast } from "react-toastify";

const Actualizar = () => {
    
    return (
        <div className="flex justify-center justify-items-center">
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Venta Actualizada") }} className='mt-8 max-w-md flex flex-col ' className='flex flex-col m-80'>
                <h1 className="font-bold text-3xl">Formulario para actualizar información</h1>
                <div className="flex flex-col">
                    <input type="text" placeholder='Nombre usuario'/>
                    <input type="text" placeholder='Estado'/>
                    <input type="text" placeholder='Rol'/>
                </div>
                <button type="submit" className="col-span-2 bg-blue-500 p-2 rounded-full shadow-md hover:bg-blue-600 text-white">Actualizar</button>
                <ToastContainer position="bottom-center" autoClose={3000} />
            </form>
           
        </div>
    )
}

export default Actualizar
