import React from 'react';
import { Link } from 'react-router-dom';
import post1 from '../../../assets/post1.png';
import postProfile from '../../../assets/post-profile.png';
import BreadCrumbs from '../../../components/BreadCrumbs';
import CommentsContainer from '../../../components/comments/CommentsContainer';

const breadCrumbsData = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'Article', link: '/blog/1' }
];

const Main = () => {
    const article = {
        title: "Título del Artículo",
        image: post1,
        tag: "Etiqueta del Artículo",
        date: "Fecha de Publicación",
        author: "Nombre del Autor",
        avatar: postProfile,
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netusLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum"
    };

    return (
        <div className="flex flex-col">
            <div className='p-6 text-black opacity-50'>
                <BreadCrumbs data={breadCrumbsData} />
            </div>
            <div className="w-[350px] h-[250px] sm:w-[700px] sm:h-[500px] mx-auto rounded mt-6 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <div className='p-6'>
                <Link to="/blog?category=selectedCategory" className="mb-2 text-[#FF4A5A]">
                    {article.tag}
                </Link>
                <h2 className="text-3xl text-[#0A0330] mb-1">{article.title}</h2>
                <div className='text-[#8F9BB3] mb-3'>{article.date}</div>
                <div className="flex items-center mt-1 mb-3">
                    <img src={article.avatar} alt={article.author} className="w-10 h-10 rounded-full mr-4" />
                    <span>{article.author}</span>
                </div>
                <p className='mb-6'>{article.paragraph}</p>
                <div className='mb-6'>
                    <CommentsContainer  className="mt-10" loggineUserId="a"/>
                </div>
            </div>
        </div>
    );
}

export default Main;