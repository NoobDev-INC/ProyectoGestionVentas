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

export default ventas;
