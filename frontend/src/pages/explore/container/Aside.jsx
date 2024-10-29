import React from 'react';
import GeneralFilter from '../../../components/GeneralFilter';
import ActivityFilter from '../../../components/ActivityFilter';
import HotelFilter from '../../../components/HotelFilter';
import RestaurantFilter from '../../../components/RestaurantFilter';

const Aside = () => {
    return (
        <div className="w-full overflow-y-auto">
            <p className="text-lg font-semibold mb-4">Filtrar por:</p>
            <GeneralFilter />
            <ActivityFilter />
            <HotelFilter />
            <RestaurantFilter />
        </div>
    );
};

export default Aside;