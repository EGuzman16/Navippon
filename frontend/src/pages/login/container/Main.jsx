import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Main = () => {
    return (
            <div className= 'p-12 m-6 md:pl-24 md:pt-24 md:pb-24 md:pr-80'>
            <h2 className='text-2xl mb-4'>Iniciar sesión</h2>
            
            <form>
                <label className='block mb-2'>Email*</label>
                <input type='email' className='block w-full mb-4 p-2 rounded-full bg-[#F2F2F2]'/>
                
                <label className='block mb-2'>Contraseña*</label>
                <input type='password' className='block w-full mb-4 p-2 rounded-full bg-[#F2F2F2]'/>
                
                <div className='flex items-center justify-between mb-4'>
                    <label className='flex items-center'>
                        <input type='checkbox' className='mr-2' />
                        Mantenerse conectado
                    </label>
                    <a href='#' className='text-[#FA5564]'>¿Olvidaste tu contraseña?</a>
                </div>
                
                <button type='submit' className='w-full mb-4 p-2 bg-[#FA5564] text-white rounded-full'>
                    Acceder
                </button>
            </form>
            
            <button className='w-full mb-4 p-2 border border-[#FA5564] text-black rounded-full flex items-center justify-center'>
                <FcGoogle className='mr-2' />
                Conectarse con Google
            </button>
            
            <div className='flex justify-center'>
                <span>¿No tienes cuenta?</span>
                <a href='#' className='ml-2 text-[#FA5564]'>Registrarse</a>
            </div>
        </div>
    )
}

export default Main