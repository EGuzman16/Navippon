import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { LuMapPin, LuMap } from 'react-icons/lu'

const islandPrefectures = {
    "Hokkaido": ["Hokkaido"],
    "Honshu": ["Tokyo", "Kanagawa", "Osaka", "Kyoto", "Nara", "Hyogo", "Shizuoka", "Aichi", "Fukushima", "Miyagi", "Niigata", "Nagano"],
    "Shikoku": ["Ehime", "Kagawa", "Kochi", "Tokushima"],
    "Kyushu": ["Fukuoka", "Kumamoto", "Kagoshima", "Oita", "Nagasaki", "Miyazaki", "Saga"],
    "Okinawa": ["Okinawa"]
};

const islands = Object.keys(islandPrefectures);

const SearchBar = () => {
    const [selectedIsland, setSelectedIsland] = useState("");
    const [prefectures, setPrefectures] = useState([]);

    const handleIslandChange = (event) => {
        const island = event.target.value;
        setSelectedIsland(island);
        setPrefectures(islandPrefectures[island] || []);
    };

    return (
        <div>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                    <div className="relative flex items-center w-full md:w-9/10 lg:w-19/20 mb-4 md:mb-0">
                        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                        <input type="text" placeholder="¿Qué estás buscando?" className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base bg-[#D7EDFC]" />
                    </div>
                    <div className="relative flex items-center w-full md:w-2/3 lg:w-3/4 mb-4 md:mb-0">
                        <LuMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                        <select onChange={handleIslandChange} className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base bg-[#D7EDFC]" style={{ color: '#4F4F4F' }}>
                            <option value="">Región</option>
                            {islands.map((island, index) => (
                                <option key={index} value={island}>{island}</option>
                            ))}
                        </select>
                    </div>
                    <div className="relative flex items-center w-full md:w-3/4 lg:w-5/6 mb-4 md:mb-0">
                        <LuMap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fa5564]" />
                        <select className="pl-10 pr-4 py-2 rounded-full w-full text-sm md:text-base lg:text-base bg-[#D7EDFC]" style={{ color: '#4F4F4F' }}>
                            <option value="">Prefectura</option>
                            {prefectures.map((prefecture, index) => (
                                <option key={index} value={prefecture}>{prefecture}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full md:w-1/5 lg:w-1/6 md:ml-4 mb-4 md:mb-0">
                        <button type="submit" className="bg-[#fa5564] text-white rounded-full px-6 py-3 w-full md:w-auto">Buscar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
