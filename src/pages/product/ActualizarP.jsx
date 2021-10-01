const ActualizarP = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className = 'text 2xl font-extrabold text-gray-800'> Página para actualizar información del producto</h2>
            <form className='grid  grid-col-2'>
                <label htlmFor='actualizar'>
                    ¿Qué desea modificar?
                    <select name='actualizar'>
                        <option disabled>Seleccione una opción</option>
                        <option>Nombre</option>
                        <option>Marca</option>
                        <option>Precio</option>
                        
                    </select>

                </label>
                <label className='flex flex-col' htlmFor='valor'>
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
                <spam className='text-green-500'>Producto actualizado con éxito</spam>
                <spam className='text-red-500'>error actualizando producto </spam>

            </form>
            
        </div>
    );
};

export default ActualizarP