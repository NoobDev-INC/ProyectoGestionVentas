const InformacionP = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className = 'text 2xl font-extrabold text-gray-800'> Página para verificar la información del producto</h2>
      <form className='grid  grid-col-2'>
        <label htlmfor='info'>
          Información del producto
        </label>
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del producto
        </label>
        <label className='flex flex-col' htmlFor='nombre'>
          ID del producto
        </label>
        <label className='flex flex-col' htmlFor='nombre'>
          Marca del producto
        </label>
        <label className='flex flex-col' htmlFor='nombre'>
          Precio del producto
        </label>
      </form>
    </div>
  );
};

export default InformacionP