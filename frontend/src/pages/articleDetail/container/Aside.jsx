import React from 'react'
import { Link } from 'react-router-dom';
import SocialShareButtons from '../../../components/SocialShareButtons';

const latestPosts = [
  {
    id: 1,
    title: 'Primer Post',
    createdAt: '2023-01-28T15:35:53.607+0000',
    image: 'https://www.advantour.com/img/japan/images/index.jpg'
  },
  {
    id: 2,
    title: 'Segundo Post',
    createdAt: '2023-01-28T15:35:53.607+0000',
    image: 'https://www.advantour.com/img/japan/images/index.jpg'
  },
  {
    id: 3,
    title: 'Tercer Post',
    createdAt: '2023-01-28T15:35:53.607+0000',
    image: 'https://www.advantour.com/img/japan/images/index.jpg'
  },
  {
    id: 4,
    title: 'Cuarto Post',
    createdAt: '2023-01-28T15:35:53.607+0000',
    image: 'https://www.advantour.com/img/japan/images/index.jpg'
  }
]
const tags = ['Cultura', 'Gatronomía', 'Viajes', 'Eventos', 'Novedades'];

const Aside = () => {
  return (
    <div className='md:mt-12 mt-1 pr-12 pl-6'>
      <h4 className='mb-4 text-[#0A0330] text-2xl'>Últimos post :</h4>

      {latestPosts.map(post => (
        <div key={post.id} className='flex mb-4 bg-white rounded shadow-lg border'>
          <div className='w-1/4'>
            <img src={post.image} alt={post.title} className='w-24 h-24' />
          </div>
          <div className='w-3/4'>
            <h3 className='text-[#0A0330] pl-2 mt-3'>{post.title}</h3>
            <span className="text-gray-600 pl-2">
                {new Date(post.createdAt).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
          </div>
        </div>
      ))}

<div className='mt-6 mb-6'>
<spam className='mb-4 text-[#0A0330] text-2xl'> Tag populares:</spam>
<div className="flex flex-wrap justify-center gap-2 mt-3">
        {tags.map(tag => (
            <Link
                key={tag}
                to={`/${tag.toLowerCase()}`}
                className="bg-[#0A0330] text-white px-4 py-2 rounded hover:bg-[#FF4A5A]"
            >
                {tag}
            </Link>
        ))}
    </div>
            </div> 
            <div className="mt-7 mb-7">
            <spam className='mb-4 text-[#0A0330] text-2xl'>Comparte el artículo en:</spam>
              <SocialShareButtons
              //  url={encodeURI(window.location.href)}
              //  title={encodeURIComponent(data?.title)}
              />
            </div>
    </div>
  )
}

export default Aside