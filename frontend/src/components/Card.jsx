import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import kyushu from '../assets/kyushu.png';

const Card = () => {
    const [liked, setLiked] = useState(false);
    const image = kyushu;
    const title = "Kyushu";
    const rating = 4;
    const category = "Destino turístico";
    const price = "$200";

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden relative"> 
            <div className="image-container w-full h-50 relative">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div 
                    className="absolute top-2 right-2 p-2 rounded-full cursor-pointer" 
                    style={{ 
                        backgroundColor: '#FF4A5A', 
                        border: '2px solid #FF4A5A' 
                    }}
                    onClick={toggleLike}
                >
                    {liked ? <FaHeart color="white" /> : <FaRegHeart color="white" />}
                </div>
            </div>
            <div className="relative p-0 -mt-6 rounded-t-3xl bg-white text-center">
                <h3 className="text-lg font-bold" style={{ color: '#FF4A5A', margin: '10px 0' }}>{title}</h3>
                <div className="rating flex justify-center" style={{ color: '#96C6D9', margin: '10px 0' }}>
                    <ReactStars
                        count={5}
                        value={rating}
                        size={24}
                        isHalf={false}
                        emptyIcon={<FaRegStar color="#96C6D9" />}
                        filledIcon={<FaStar color="#96C6D9" />}
                        activeColor="#96C6D9"
                        edit={false}
                    />
                </div>
                <h4 className="text-md font-semibold" style={{ color: '#8F9BB3', margin: '10px 0' }}>{category}</h4>
                <p className="text-lg font-bold" style={{ color: '#FF4A5A', margin: '10px 0' }}>{price}</p>
                <button className="w-full py-2 rounded-full mt-6" style={{ backgroundColor: '#222B45', color: 'white', margin: 0 }}>
                    Ver más
                </button>
            </div>
        </div>
    );
}

export default Card;