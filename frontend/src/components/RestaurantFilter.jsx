import React, { useState } from 'react';
import { FaWifi, FaUtensils, FaDog, FaLeaf, FaFish, FaChild } from 'react-icons/fa';

const RestaurantFilter = () => {
    const [showAllTypes, setShowAllTypes] = useState(false);
    const [showAllCuisines, setShowAllCuisines] = useState(false);
    const [showAllServices, setShowAllServices] = useState(false);

    const restaurantTypes = ["Restaurantes tradicionales", "Cadenas de comida rápida", "Cafeterías y cafés", "Restaurantes de alta cocina", "Food trucks", "Ramen", "Sushi"];
    const cuisines = ["Cocina japonesa tradicional", "Internacional", "Fusión", "Cocina vegetariana/vegana", "Cocina sin gluten", "Cocina halal", "Cocina kosher", "Rápida", "Cocina de autor", "Con espectáculo", "Familiar", "Romántica", "Negocios", "Ocasiones especiales"];
    const services = [
        { icon: FaWifi, label: "Wi-Fi gratis" },
        { icon: FaUtensils, label: "Menú en inglés" },
        { icon: FaUtensils, label: "Reservas en línea" },
        { icon: FaUtensils, label: "Entregas a domicilio" },
        { icon: FaUtensils, label: "Terraza o comedor al aire libre" },
        { icon: FaUtensils, label: "Opciones de comida para llevar" },
        { icon: FaDog, label: "Admite mascotas" },
        { icon: FaLeaf, label: "Ingredientes orgánicos" },
        { icon: FaFish, label: "Mariscos frescos" },
        { icon: FaChild, label: "Menús infantiles" }
    ];

    const handleShowMoreTypes = () => {
        setShowAllTypes(!showAllTypes);
    };

    const handleShowMoreCuisines = () => {
        setShowAllCuisines(!showAllCuisines);
    };

    const handleShowMoreServices = () => {
        setShowAllServices(!showAllServices);
    };

    return (
        <div className="text-black">
            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Tipo de restaurant</h5>
                <div className="space-y-2 mt-1 pl-2">
                    {restaurantTypes.slice(0, showAllTypes ? restaurantTypes.length : 5).map((type, index) => (
                        <label key={index} className="flex items-center">
                            <input type="checkbox" />
                            <span className="ml-2">{type}</span>
                        </label>
                    ))}
                    <button onClick={handleShowMoreTypes} className="text-blue-500 mt-2 flex justify-center w-full">
                        {showAllTypes ? 'Mostrar menos' : 'Mostrar más'}
                    </button>
                </div>
            </div>
            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Tipos de cocina</h5>
                <div className="space-y-2 mt-1 pl-2">
                    {cuisines.slice(0, showAllCuisines ? cuisines.length : 5).map((cuisine, index) => (
                        <label key={index} className="flex items-center">
                            <input type="checkbox" />
                            <span className="ml-2">{cuisine}</span>
                        </label>
                    ))}
                    <button onClick={handleShowMoreCuisines} className="text-blue-500 mt-2 flex justify-center w-full">
                        {showAllCuisines ? 'Mostrar menos' : 'Mostrar más'}
                    </button>
                </div>
            </div>
            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Servicios</h5>
                <div className="space-y-2 mt-1 pl-2">
                    {services.slice(0, showAllServices ? services.length : 5).map((service, index) => (
                        <label key={index} className="flex items-center">
                            <input type="checkbox" />
                            <div className="flex ml-2 items-center">
                                <service.icon className="text-[#FF4A5A]" />
                                <span className="ml-2">{service.label}</span>
                            </div>
                        </label>
                    ))}
                    <button onClick={handleShowMoreServices} className="text-blue-500 mt-2 flex justify-center w-full">
                        {showAllServices ? 'Mostrar menos' : 'Mostrar más'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantFilter;