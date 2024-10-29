import React from 'react'
import BannerTrip from '../../../components/BannerTrip'
import Paginator from '../../../components/Paginator';

const TripMain = () => {
    return (
        <div className='p-6'>
            <h3 className="text-2xl ml-6 mb-1 mt-3">Mis Viajes</h3>
            <div className="flex justify-center mb-3 mt-3">
                <button className="bg-[#FF4A5A] text-white py-2 px-4 rounded-full">
                    Agregar nuevo Itinerario
                </button>
            </div>
            <div className='p-6'>
                <BannerTrip />
                <BannerTrip />
                <BannerTrip />
                <BannerTrip />
                <Paginator />
            </div>
        </div>
    );
}

export default TripMain;