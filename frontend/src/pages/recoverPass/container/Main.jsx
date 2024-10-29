import React from 'react'

const Main = () => {
    return (
        <div className='p-12 m-6 md:pl-24 md:pt-24 md:pb-24 md:pr-80'>
            <h2 className="text-2xl font-bold mb-4 text-center">Olvidaste Tu Contraseña</h2>
            <span className="text-gray-600 mb-4 block text-center">Te enviaremos un mail con un link de recuperación de contraseña.</span>
            <form>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email**
                </label>
                <input
                    id="email"
                    type="email"
                    className="mb-4 p-2 bg-[#F2F2F2] w-full rounded-full"
                    placeholder="Introduce tu email"
                />
            </form>
            <button className="bg-red-500 text-white w-full rounded-full px-4 py-2 mt-4">
                Enviar
            </button>
        </div>
    )
}

export default Main