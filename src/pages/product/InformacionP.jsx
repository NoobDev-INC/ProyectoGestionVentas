
const InformacionP = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className = 'text-2xl font-extrabold text-gray-800'> Página para verificar la información del producto</h2>
      <form className='grid  grid-col-2'>
        <label className='font-bold' htlmfor='info'>
          Información del producto
        </label>
        <label className=' font-bold flex flex-col' htmlFor='nombre'>
          Nombre del producto
          <input
            name='nombre' 
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            placeholder='Galaxi S10'
          />
        </label>
        <label className='font-bold flex flex-col' htmlFor='ID'>
          ID del producto
          <input
            name='ID' 
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            placeholder='165'
          />

        </label>
        <label className='font-bold flex flex-col' htmlFor='marca'>
          Marca del producto
          <input
            name='marca' 
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            placeholder='Samsung'
          />

        </label>
        <label className='font-bold flex flex-col' htmlFor='precio'>
          Precio del producto
          <input
            name='precio' 
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            placeholder='3500000'
          />

        </label>
      </form>
    </div>
  );
};

export default InformacionP