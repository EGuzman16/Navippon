import React from 'react';
import { FaStar, FaTrain, FaPlane, FaLandmark, } from 'react-icons/fa';

const GeneralFilter = () => {
    return (
        <div className="text-black">
            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Estación del año</h5>
                <div className="space-y-2 mt-1 pl-2">
                    <label className="block">
                        <input type="checkbox" /> Primavera
                    </label>
                    <label className="block">
                        <input type="checkbox" /> Verano
                    </label>
                    <label className="block">
                        <input type="checkbox" /> Otoño
                    </label>
                    <label className="block">
                        <input type="checkbox" /> Invierno
                    </label>
                </div>
            </div>

            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Presupuesto</h5>
                <div className="space-y-2 mt-1 pl-2">
                    <label className="block">
                        <input type="checkbox" /> Gratis
                    </label>
                    <label className="block">
                        <input type="checkbox" /> Económico
                    </label>
                    <label className="block">
                        <input type="checkbox" /> Moderado
                    </label>
                    <label className="block">
                        <input type="checkbox" /> Lujo
                    </label>
                </div>
            </div>

            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Valoración</h5>
                <div className="space-y-2 mt-1 pl-2">
                    <label className="flex items-center">
                        <input type="checkbox" /> 
                        <div className="flex ml-2">
                            <FaStar color="#96C6D9" />
                        </div>
                        
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" /> 
                        <div className="flex ml-2">
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                        </div>
                        
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" /> 
                        <div className="flex ml-2">
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                        </div>
                        
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" /> 
                        <div className="flex ml-2">
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                        </div>
                        
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" /> 
                        <div className="flex ml-2">
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                            <FaStar color="#96C6D9" />
                        </div>                        
                    </label>
                </div>
            </div>
            <div className="border border-[#D7EDFC] mb-6 pb-1">
            <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Filtros por Ubicación Específica</h5>
            <div className="space-y-2 mt-1 pl-2">
                <label className="flex items-center">
                    <input type="checkbox" />
                    <div className="flex ml-2 items-center">
                        <FaTrain className="inline-block mr-2" color="#FF4A5A" />
                        <span>Cerca de estaciones de tren o metro</span>
                    </div>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" />
                    <div className="flex ml-2 items-center">
                        <FaPlane className="inline-block mr-2" color="#FF4A5A" />
                        <span>Cerca de aeropuertos</span>
                    </div>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" />
                    <div className="flex ml-2 items-center">
                        <FaLandmark className="inline-block mr-2" color="#FF4A5A" />
                        <span>Cerca de áreas de puntos de interés</span>
                    </div>
                </label>
            </div>
        </div>
        </div>
    );
}

export default GeneralFilter;