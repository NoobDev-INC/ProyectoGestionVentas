import { ToastContainer, toast } from 'react-toastify';

const ActualizarP = () => {
    toast.success('Producto actualizado con éxito');
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className = 'text-2xl font-extrabold text-gray-800'> Página para actualizar información del producto</h2>
            <form className='mt-8 max-w-md flex flex-col '>
                <div className='flex flex-col items-center justify-center'> 

                    <label className=' font-bold flex flex-col' htlmFor='actualizar'  >
                        ¿Qué desea modificar?
                        Seleccione una opción
                        <select name='actualizar'>
                            <option disabled>Seleccione una opción</option>
                            <option>Nombre</option>
                            <option>Marca</option>
                            <option>Precio</option>
                            
                        </select>

                    </label>
                    <label className='font-bold flex flex-col' htlmFor='valor'>
                        Ingrese valor 
                        <input
                            name='valor' 
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            placeholder='valor'
                        />

                    </label>
                    <button className='col-span-2  bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>
                    Guardar
                    </button>
                </div>
                
            </form>
            
            <ToastContainer position="bottom-center" autoClose={3000} />
            
        </div>
    );
};

export default ActualizarP