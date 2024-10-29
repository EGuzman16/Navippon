import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { LuMapPin } from "react-icons/lu"
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import CommentsContainer from '../../../components/comments/CommentsContainer';
import postProfile from '../../../assets/post-profile.png';

const Main = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    const data = {
        title: "TITULO DEL ATRACTIVO/HOTEL/RESTAURANTE",
        author: "Nombre del Autor",
        authorAvatar: postProfile,
        rating: 5,
        prefecture: "NOMBRE DE LA PREFECTURA",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }

    return (
        <div className="relative">
            <div className="flex  md:flex-row md:justify-between md:items-center mb-3">
                <h2 className='text-3xl mb-3'>{data.title}</h2>
                <div 
                    className="p-2 rounded-full cursor-pointer mt-2 md:mt-0 w-12 h-12 flex items-center justify-center" 
                    style={{ 
                        backgroundColor: '#FF4A5A', 
                        border: '2px solid #FF4A5A',
                        fontSize: '30px' 
                    }}
                    onClick={toggleLike}
                >
                    {liked ? <FaHeart color="white" /> : <FaRegHeart color="white" />}
                </div>
            </div>
            <div className="flex items-center mb-2">
                <img src={data.authorAvatar} alt="Autor" className="w-10 h-10 rounded-full mr-2" />
                <span>{data.author}</span>
            </div>
            <div className="flex mb-2">
                {Array.from({ length: data.rating }, (_, index) => (
                    <AiFillStar key={index} color="#96C6D9" />
                ))}
            </div>
            <div className="flex items-center">
                <LuMapPin color="#FA5564" /> <span className="ml-2">{data.prefecture}</span>
            </div>
            <div className="flex items-center mt-4 mb-2">
                <h3>Descripción General</h3>
            </div>
            <p>{data.description}</p>

            <div className='mt-6'>
                <h3 className='text-2xl'>Comentarios</h3>
            <CommentsContainer  className="mt-10" loggineUserId="a"/>
            </div>

        </div>
    )
}

export default Main