import React from 'react'

const imageData = {
    url: 'https://a2.cdn.japantravel.com/photo/234-216159/1440x960!/kyoto-kyoto-prefecture-216159.jpg', 
    alt: 'Imagen de ejemplo'
}

const Hero = () => {
    return (
        <div className="relative h-screen">
            <img 
                src={imageData.url} 
                alt={imageData.alt} 
                className="object-cover w-full h-full"
            />
        </div>
    )
}

export default Hero