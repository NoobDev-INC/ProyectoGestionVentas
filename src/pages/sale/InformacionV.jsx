import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ventasBackend = [
  {
    nombre: "Juan",
    identificacion: 1051920333,
    identificadorVenta: 56438,
    cantidad: 4,
    precio: 3500000,
  },
  {
    nombre: "Jose",
    identificacion: 1051810333,
    identificadorVenta: 78438,
    cantidad: 7,
    precio: 800000,
  },
  {
    nombre: "Valentina",
    identificacion: 1051870333,
    identificadorVenta: 95438,
    cantidad: 10,
    precio: 9000000,
  },
];

const InformacionV = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Añadir nueva venta");
  const [colorBoton, setColorBoton] = useState("blue");

  useEffect(() => {
    //obtener lista de productos desde el backend
    setVentas(ventasBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Añadir nueva venta");
      setColorBoton("blue");
    } else {
      setTextoBoton("Mostrar Todas las ventas");
      setColorBoton("blue");
    }
  }, [mostrarTabla]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Página de administración de ventas
        </h2>
      </div>
      <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 hover:bg-${colorBoton}-600 p-2 rounded-full self-end`}
        >
          {textoBoton}
        </button>
      {mostrarTabla ? (
        <TablaVentas listaVentas={ventas} />
      ) : (
        <FormularioCreacionVentas
          setMostrarTabla={setMostrarTabla}
          listaVentas={ventas}
          setVentas={setVentas}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const TablaVentas = ({ listaVentas }) => {
  useEffect(() => {
    console.log(
      "este es el listado de ventas en el componente de tabla",
      listaVentas
    );
  }, [listaVentas]);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Todos las ventas
      </h2>
      <table>
        <thead>
          <tr>
            <th>Nombre </th>
            <th>identificacion</th>
            <th>identificador de venta</th>
            <th>cantidad</th>
            <th>precio</th>
          </tr>
        </thead>
        <tbody>
          {listaVentas.map((venta) => {
            return (
              <tr>
                <td>{venta.nombre}</td>
                <td>{venta.identificacion}</td>
                <td>{venta.identificadorVenta}</td>
                <td>{venta.cantidad}</td>
                <td>{venta.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionVentas = ({setMostrarTabla,listaVentas,setVentas,}) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    setMostrarTabla(true);
    setVentas([...listaVentas, nuevaVenta]);
    // identificar el caso de éxito y mostrar un toast de éxito
    toast.success("Venta agregada con éxito");
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un vehículo');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nueva venta
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col ">
        <label className="font-bold flex flex-col" htmlFor="nombre">
          Nombre cliente
          <input
            name="nombre"
            className=" bg-gray-50 border border-gray-600 p-1 rounded-xl m-2"
            type="text"
            placeholder="Nombre cliente"
            required
          />
        </label>
        <label className="font-bold flex flex-col" htmlFor="identificacion">
          Identificacion
          <input
            name="identificacion"
            className="bg-gray-50 border border-gray-600 p-1 rounded-xl m-2"
            type="text"
            placeholder="Identificacion"
            required
          />
        </label>
        <label className="font-bold flex flex-col" htmlFor="identificador">
          Identificador venta
          <input
            name="identificador venta"
            className="bg-gray-50 border border-gray-600 p-1 rounded-xl m-2"
            type="text"
            placeholder="Identificador"
            required
          />
        </label>
        <label className="font-bold flex flex-col" htmlFor="cantidad">
          Cantidad
          <input
            name="cantidad"
            className="bg-gray-50 border border-gray-600 p-1 rounded-xl m-2"
            type="number"
            min={0}
            max={200}
            placeholder="0"
            required
          />
        </label>
        <label className="font-bold flex flex-col" htmlFor="precio">
          Precio
          <input
            name="precio"
            className="bg-gray-50 border border-gray-600 p-1 rounded-xl m-2"
            type="number"
            min={0}
            max={20000000}
            placeholder="0"
            required
          />
        </label>

        <button
          type="submit"
          className="col-span-2 bg-blue-500 p-2 rounded-full shadow-md hover:bg-blue-600 text-white"
        >
          Guardar Venta
        </button>
      </form>
    </div>
  );
};

export default InformacionV;