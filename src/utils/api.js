import axios from 'axios';
import { MdGeneratingTokens } from 'react-icons/md';

const baseURL = "https://frozen-beach-86139.herokuapp.com"

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: `${baseURL}/productos/`, headers: {
    Authorization: getToken(),}, 
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/productos/`,
    headers: { 
      'Content-Type': 'application/json', Authorization: getToken(),
     },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `${baseURL}/productos/${id}/`,
    headers: {
      'Content-Type': 'application/json', Authorization: getToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `${baseURL}/productos/${id}/`,
    headers: { 
      'Content-Type': 'application/json',Authorization: getToken(),
     },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/usuarios/self/`,
    headers: { 
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}; 