const ActualizarP = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className = 'text 2xl font-extrabold text-gray-800'> Página para actualizar información del producto</h2>
            <form className='grid  grid-col-2'>
                <label htlmfor='Buscar'>
                    ¿Qué desea modificar?
                    <select name='buscar'>
                        <option disabled>Seleccione una opción</option>
                        <option>Nombre</option>
                        <option>Marca</option>
                        <option>Precio</option>
                        
                    </select>

                </label>
            </form>
            <button className='col-span-2  bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>
                Guardar
            </button>
        </div>
    );
};

export default ActualizarP