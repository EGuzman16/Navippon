import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import post1 from '../assets/post1.png';
import postprofile from '../assets/post-profile.png';

const ArticleCard = () => {
    const image = post1;
    const title = "titulo del post";
    const resume = "Loremis simply dummy text of the printing and typesetting industry.";
    const name = "nombre usuario";
    const createdAt = new Date();
    const verified = true; 

    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden relative">
            <div className="image-container w-full h-50 relative">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="relative p-4 -mt-6 rounded-t-3xl bg-white text-left">
                <h3 className="text-lg font-bold" style={{ color: '#FF4A5A', margin: '10px 0' }}>{title}</h3>
                <h4 className="text-md font-semibold" style={{ color: '#8F9BB3', margin: '10px 0' }}>{resume}</h4>
                <a href="#" className="text-blue-500">Ver más</a>
                <div className="flex items-center justify-center mt-4">
                    <img src={postprofile} alt={name} className="w-10 h-10 rounded-full mr-2" />
                    <div className="text-left">
                        <p className="text-sm font-semibold">{name}</p>
                        <p className="text-xs text-gray-500 mb-2">{createdAt.toLocaleDateString()}</p>
                    </div>
                    {verified ? (
                        <BsCheckLg className="text-green-500 ml-2" />
                    ) : (
                        <AiOutlineClose className="text-red-500 ml-2" />
                    )}
                </div>
            </div>
        </div>
    );
    }
    
    export default ArticleCard;