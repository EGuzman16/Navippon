import React from 'react';
import Slider from 'react-slick';
import hokkaido from '../../../assets/hokkaido.png';
import tohoku from '../../../assets/tohoku.png';
import kanto from '../../../assets/kanto.png';
import chubu from '../../../assets/chubu.png';
import kansai from '../../../assets/kansai.png';
import chugoku from '../../../assets/chugoku.png';
import shikoku from '../../../assets/shikoku.png';
import kyushu from '../../../assets/kyushu.png';
import okinawa from '../../../assets/okinawa.png';

const regions = [
    { name: 'Hokkaido', image: hokkaido },
    { name: 'Honshu', image: kanto }, 
    { name: 'Kyushu', image: kyushu },  
    { name: 'Shikoku', image: shikoku },  
    { name: 'Okinawa', image: okinawa },   
    { name: 'Islas Ogasawara', image: tohoku }, 
    { name: 'Islas Izu', image: chubu },  
    { name: 'Isla Tsushima', image: chugoku },  
    { name: 'Isla Sado', image: kansai}  
];

const RegionCarrusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className="region-carousel my-12 p-6 bg-white">
            <h2 className="text-left mb-4 text-2xl">Navega por región</h2>
            <span className="block mb-8">Encuentra tus atractivos y restaurantes favoritos en la región que más te llame la atención.</span>
            <Slider {...settings}>
                {regions.map((region, index) => (
                    <div key={index} className="p-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="icon-container mb-4 bg-white shadow-lg rounded-full flex justify-center items-center" style={{ width: '160px', height: '160px' }}>
                                <img src={region.image} alt={region.name} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-[#8F9BB3]">{region.name}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RegionCarrusel;