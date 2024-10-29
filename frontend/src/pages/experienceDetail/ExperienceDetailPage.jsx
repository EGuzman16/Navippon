import React, { useState } from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import Main from './container/Main';
import Aside from './container/Aside';
import { FaTimes } from 'react-icons/fa';
import { FaRegMap } from "react-icons/fa6";

const ExperienceDetailPage = () => {
    const [isAsideVisible, setIsAsideVisible] = useState(false);

    const toggleAside = () => {
        setIsAsideVisible(!isAsideVisible);
    };

    return (
        <MainLayout>
            <div className="relative">
                <Hero />
                <div className="relative p-8 -mt-12 rounded-t-3xl bg-white flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-3/5">
                        <Main />
                    </div>
                    <div className="w-full md:w-2/5 hidden md:block">
                        <Aside />
                    </div>
                </div>
                {isAsideVisible && (
                    <div className="fixed inset-0 bg-white z-50 p-4 md:hidden overflow-y-auto">
                        <button 
                            className="absolute top-4 right-4 p-2 bg-[#FA5564] text-white rounded-full"
                            onClick={toggleAside}
                        >
                            <FaTimes />
                        </button>
                        <Aside />
                    </div>
                )}
                <button 
                    className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full md:hidden"
                    onClick={toggleAside}
                >
                    <FaRegMap size={24} />
                </button>
            </div>
        </MainLayout>
    );
};

export default ExperienceDetailPage;