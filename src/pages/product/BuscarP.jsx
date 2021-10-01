const BuscarP = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className = 'text 2xl font-extrabold text-gray-800'> Página para buscar producto</h2>
            <form className='grid  grid-col-2'>
                <label htlmfor='Buscar'>
                    Buscar el producto a actualizar o verificar
                    <select name='buscar'>
                        <option disabled>Seleccione una opción de búsqueda</option>
                        <option>Indentificador del producto</option>
                        <option>Descripción del producto</option>
                    </select>

                </label>
            </form>
            <button className='col-span-2  bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>
                Verificar
            </button>
            <button className='col-span-2  bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>
                Actualizar
            </button>

        </div>
        
    );
};

export default BuscarP