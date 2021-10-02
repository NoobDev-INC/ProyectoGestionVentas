import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const productosBackend = [
  {
    nombre: 'Galaxy S10',
    marca: 'Samsung',
    ID: 165,
    precio: 3500000,
  },
  {
    nombre: 'Iphone 11',
    marca: 'Apple',
    ID: 136,
    precio: 4500000,
  },
  {
    nombre: 'Redmi note 9',
    marca: 'Xiaomi',
    ID: 204,
    precio: 950000
  },
];

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Añadir nuevo producto');
  const [colorBoton, setColorBoton] = useState('blue');

  useEffect(() => {
    //obtener lista de productos desde el backend
    setProductos(productosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Añadir nuevo producto');
      setColorBoton('blue');
    } else {
      setTextoBoton('Mostrar Todos los Productos');
      setColorBoton('green');
    }
  }, [mostrarTabla]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Página de administración de Productos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 border  border-gray-600 p-2 rounded-xl m-2`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaProductos listaProductos={productos} />
      ) : (
        <FormularioCreacionProductos
          setMostrarTabla={setMostrarTabla}
          listaProductos={productos}
          setProductos={setProductos}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaProductos = ({ listaProductos }) => {
  useEffect(() => {
    console.log('este es el listado de productos en el componente de tabla', listaProductos);
  }, [listaProductos]);
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Marca del producto</th>
            <th>ID del producto</th>
            <th>precio del producto</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => {
            return (
              <tr>
                <td>{producto.nombre}</td>
                <td>{producto.marca}</td>
                <td>{producto.ID}</td>
                <td>{producto.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    
    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    setMostrarTabla(true);
    setProductos([...listaProductos, nuevoProducto]);
    // identificar el caso de éxito y mostrar un toast de éxito
    toast.success('Producto agregado con éxito');
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un vehículo');
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo producto</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del producto
          <input
            name='nombre'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'
            placeholder='nombre telefono'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Marca del producto
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='marca'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Xiaomi</option>
            <option>Huawei</option>
            <option>Nokia</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor='ID'>
          ID del producto
          <input
            name='ID'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={0}
            max={1000}
            placeholder='0'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='precio'>
          precio del producto
          <input
            name='precio'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={0}
            max={20000000}
            placeholder='0'
            required
          />
        </label>

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar Producto
        </button>
      </form>

    </div>
  );
};

export default Productos;