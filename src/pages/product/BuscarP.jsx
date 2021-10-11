import { Link } from 'react-router-dom';
const BuscarP = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className ='text-2xl font-extrabold text-gray-800'> Página para buscar producto</h2>
            <form className='flex  flex-col'>
                
                <label className='font-bold flex flex-col' htlmFor='producto'>
                    Producto a actualizar o verificar
                    <select name='producto'className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'>
                        <option disabled>Seleccione una opción de búsqueda</option>
                        <option>Indentificador del producto</option>
                        <option>Descripción del producto</option>
                    </select>

                </label>
                <label className='font-bold flex flex-col' htlmFor='valor'>
                    Ingrese valor 
                    <input
                        name='valor' 
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        placeholder='Identificador o descripción'
                    />

                </label>
                
                <div className='flex flex-col items-center justify-center'>
                    <button
                        type='submit'
                        className='text-white bg-green-500 border border-gray-600 p-2 rounded-xl m-2'
                    >
                        Buscar producto
                    </button>
                    <Link to='/InformacionP'>
                        <button
                            type='submit'
                            className='text-white bg-green-500 border border-gray-600 p-2 rounded-xl m-2'
                        >
                            Ver información producto
                        </button>
                    </Link> 
                    <Link to='/ActualizarP'>
                        <button
                        type='submit'
                        className='text-white bg-green-500 border border-gray-600 p-2 rounded-xl m-2'
                        >
                            Actualizar producto
                        </button>
                   </Link>
                   

                </div>  
            </form>
        </div>
    );
};

export default BuscarP