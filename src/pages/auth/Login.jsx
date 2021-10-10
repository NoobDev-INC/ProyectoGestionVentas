import React from 'react';
import LogoGoogle from 'media/Google.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
     <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
    <div class="bg-gray-100 " style={{width:'35%'}}>
    <form
       action=""
       class="border border-gray-200 shadow-xs mx-auto rounded-lg p-10 bg-white text-center space-y-6 flex-grow"
    >
       <div class="flex flex-col">
          <label
             for="email"
             class="self-start mb-2 font-medium text-gray-800"
             >Ingresa tu email</label>
          <input
             type="text"
             id="email"
             placeholder="Escribe tu email"
             class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
             autocomplete="off"
          />
       </div>
       <div class="flex flex-col">
          <label
             for="pass"
             class="self-start mb-2 font-medium text-gray-800"
             >Contraseña</label>
          <input
             type="text"
             id="pass"
             placeholder="Escribe tu contraseña"
             class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
             autocomplete="off"
          />
       </div>
       <div class="flex justify-between">
          <span class="flex items-center">
             <div class="btn-status">
                <input
                   type="checkbox"
                   name="checkbox"
                   id="switch"
                   class="hidden"
                />
                <label for="switch" class="switch block mr-2"></label>
             </div>
          </span>
       </div>
       <Link to='/Menu'>
        <button
            class="justify-center rounded text-white bg-indigo-500 h-12 w-60 font-semibold"
        >
            Iniciar sesión
        </button>
       </Link>
       <div class="flex items-center text-gray-800 justify-center">
          <span class="block border border-gray-200"></span>O
          continuar con<span
             class="block border border-gray-200 "
          ></span>
       </div>
       <div
          class="flex items-center text-center justify-center"
       >
          <a
             href="https://google.com/"
             target="blank"
             class="cursor-pointer "
             ><img src={LogoGoogle} alt="Google" class="h-20 w-30"
          /></a>
       </div>
    </form>
 </div>
 </div>
 )
};

export default Login;




































    /*<div className='flex flex-col w-full justify-center items-center'>
      <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>
        Inicia sesión en tu cuenta
      </h2>
      <form className='mt-8 max-w-md'>
        <div>
          <input
            className='text-center appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            type='email'
            placeholder='jdsg@email.com'
            required
          />
          <input
            className='text-center appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            placeholder='contraseña'
            type='password'
            required
          />
        </div>
        
        <div className="justify-items-center justify-center">
          <Link to='/menu'>
            <button type='submit' class="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl justify-end">Iniciar Sesión</button>
          </Link>
        </div>
        <div className="justify-items-center">O</div>
        <div>
          <button>Continua con google</button>
        </div>
      </form>
    </div>*/
