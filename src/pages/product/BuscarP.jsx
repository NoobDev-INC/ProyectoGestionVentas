const BuscarP = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className ='text 2xl font-extrabold text-gray-800'> Página para buscar producto</h2>
            <form className='flex  flex-col'>
                
                <label className='flex flex-col' htlmFor='producto'>
                    Producto a actualizar o verificar
                    <select name='producto'className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'>
                        <option disabled>Seleccione una opción de búsqueda</option>
                        <option>Indentificador del producto</option>
                        <option>Descripción del producto</option>
                    </select>

                </label>
                <label className='flex flex-col' htlmFor='valor'>
                    Ingrese valor 
                    <input
                        name='valor' 
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        placeholder='buscar'
                    />

                </label>
                <button
                   type='submit'
                   className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
                >
                    Verificar producto
                </button>
                <button
                   type='submit'
                   className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
                >
                    Actualizar producto
                </button>
            </form>
        </div>
    );
};

export default BuscarP