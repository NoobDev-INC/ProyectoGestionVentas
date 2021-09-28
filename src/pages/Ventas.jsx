const ventas = () => {
  return (
    <div className=' flex flex-col w-full justify-center items-center '>
        <h2 className='m-16 text-center text-3xl font-extrabold text-gray-900'>
        Verificar información de las ventas
        </h2>
        <form className='mt-8 max-w-md'>
            <div >
            <input
                    className="relative block w-full px-3 py-2 text-center border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    placeholder="Identificador de venta"
                />
            </div>
            <div>
            <input
                    className="relative block w-full px-3 py-2 text-center border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    placeholder="Documento de identidad"
                />
            </div>
            <div>
            <input
                    className="relative block w-full px-3 py-2 text-center border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text"
                    placeholder="Nombre del cliente"
                />
            </div>
            <div>
            <button className="relative block w-full px-3 py-2 text-center border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type='submit'>Buscar</button>
            </div>
        </form>
    </div>    
  );
};

export default ventas;
