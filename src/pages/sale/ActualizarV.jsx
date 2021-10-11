import React from 'react'
import { ToastContainer, toast } from "react-toastify";



const ActualizarV = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-extrabold text-gray-800'>
                Actualizar información
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Venta Actualizada") }} className='mt-8 max-w-md flex flex-col '>
                <label className='font-bold flex flex-col  max-w-md' >
                    Nombre
                    <input
                        className='bg-gray-50 border  border-gray-600 p-2 rounded-xl m-2'
                        type='texto'
                        placeholder='Nombre'
                        required
                    />
                </label>
                <label className='font-bold flex flex-col ' >
                    Identificacion
                    <input
                        className='bg-gray-50 border  border-gray-600 p-2 rounded-xl m-2'
                        type='texto'
                        placeholder='Identificacion'
                        required
                    />
                </label>
                <label className='font-bold flex flex-col ' htmlFor='cantidad' >
                    Cantidad
                    <input
                        className='bg-gray-50 border border-gray-600 p-2 rounded-xl m-2'
                        type='number'
                        min={0}
                        max={200}
                        placeholder='0'
                        required
                    />
                </label>
                <label className='font-bold flex flex-col ' >
                    Precio
                    <input
                        className='bg-gray-50 border  border-gray-600 p-2 rounded-xl m-2'
                        type='texto'
                        placeholder='Precio'
                        required
                    />
                </label>
                <button
                    type='submit'
                    className='font-bold bg-gray-50 border  border-gray-600 p-2 rounded-xl m-2 '
                >
                    Actualizar
                </button>
            </form>
            <ToastContainer position="bottom-center" autoClose={3000} />
        </div >
    );
};

export default ActualizarV