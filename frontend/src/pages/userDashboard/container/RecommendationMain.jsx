import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';  
import Paginator from '../../../components/Paginator';  

const RecommendationMain = () => {
  const articles = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="p-4 bg-white rounded shadow-md">
        <Card />
        <div className="flex justify-center space-x-4 mt-2">
            <Link
                to={`/editBlog/${index}`}
                className="flex items-center text-[#96C6D9]"
            >
                <FaRegEdit size={20} />
                <span className="ml-1">Editar</span>
            </Link>
            <Link
                to={`/deleteBlog/${index}`}
                className="flex items-center text-[#FF4A5A]"
            >
                <FaRegTrashAlt size={20} />
                <span className="ml-1">Eliminar</span>
            </Link>
        </div>
    </div>
));

return (
    <div className="p-7">
        <h3 className="text-2xl font-bold mb-4">Mis Recomendaciones</h3>
        <div className="flex justify-center mb-3 mt-3">
            <button className="bg-[#FF4A5A] text-white py-2 px-4 rounded-full">
                Agregar nueva recomendación
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            {articles}
        </div>
        <div className="mt-4">
            <Paginator />
        </div>
    </div>
);
}

export default RecommendationMain