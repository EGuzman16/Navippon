import React, { useState } from 'react';
import { MdOutlineForest, MdOutlineBeachAccess, MdOutlineRamenDining, MdOutlineCoffee, MdOutlineShoppingBag, MdOutlineTempleBuddhist, MdOutlineCastle, MdOutlineSurfing, MdKayaking, MdHiking, MdOutlineTempleHindu, MdOutlineHotTub } from 'react-icons/md';
import { TbBuildingMonument, TbTorii } from 'react-icons/tb';
import { LiaCocktailSolid, LiaGamepadSolid } from 'react-icons/lia';
import { GiGreekTemple, GiPartyPopper, GiSamuraiHelmet, GiAncientRuins, GiGrapes } from 'react-icons/gi';
import { FaRegStar, FaRegMoon, FaPersonSkiing } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';
import { VscOctoface } from 'react-icons/vsc';
import { LuFerrisWheel } from 'react-icons/lu';
import { PiBirdBold, PiCross, PiStarOfDavid, PiPawPrint, PiEyeBold } from 'react-icons/pi';

const categories = [
    { icon: <MdOutlineForest />, title: 'Naturaleza' },
    { icon: <MdOutlineBeachAccess />, title: 'Playa' },
    { icon: <TbBuildingMonument />, title: 'Monumento' },
    { icon: <MdOutlineRamenDining />, title: 'Gastronomía' },
    { icon: <LiaCocktailSolid />, title: 'Noche' },
    { icon: <GiGreekTemple />, title: 'Museo' },
    { icon: <MdOutlineCoffee />, title: 'Cafés' },
    { icon: <MdOutlineShoppingBag />, title: 'Shooping' },
    { icon: <FaRegStar />, title: 'Ocio' },
    { icon: <GiPartyPopper />, title: 'Festival' },
    { icon: <BsRobot />, title: 'Tecnología' },
    { icon: <LiaGamepadSolid />, title: 'Juegos' },
    { icon: <VscOctoface />, title: 'Anime' },
    { icon: <LuFerrisWheel />, title: 'Parques temáticos' },
    { icon: <GiSamuraiHelmet />, title: 'Samurai' },
    { icon: <MdOutlineTempleBuddhist />, title: 'Templo Budista' },
    { icon: <PiBirdBold />, title: 'Reserva de Aves' },
    { icon: <MdOutlineCastle />, title: 'Castillos' },
    { icon: <PiCross />, title: 'Templo Cristiano' },
    { icon: <TbTorii />, title: 'Templo Sintoísta' },
    { icon: <MdOutlineTempleHindu />, title: 'Templo Hindú' },
    { icon: <MdOutlineHotTub />, title: 'Aguas Termales' },
    { icon: <GiGrapes />, title: 'Viñedos' },
];

const ActivityFilter = () => {
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="text-black">
            <div className="border border-[#D7EDFC] mb-6 pb-1">
                <h5 className="bg-[rgba(250,85,100,0.26)] text-black p-2">Categorías</h5>
                <div className="space-y-2 mt-1 pl-2">
                    {categories.slice(0, showAll ? categories.length : 5).map((category, index) => (
                        <label key={index} className="flex items-center">
                            <input type="checkbox" />
                            <div className="flex ml-2 items-center">
                                <span className="text-[#FF4A5A]">{category.icon}</span>
                                <span className="ml-2">{category.title}</span>
                            </div>
                        </label>
                    ))}
                    <button onClick={handleShowMore} className="text-blue-500 mt-2 flex justify-center w-full">
                        {showAll ? 'Mostrar menos' : 'Mostrar más'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivityFilter;
