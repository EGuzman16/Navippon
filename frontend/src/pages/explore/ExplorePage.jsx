import React, { useState } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';
import Hero from './container/Hero';
import MainLayout from '../../components/MainLayout';
import Aside from './container/Aside';
import Main from './container/Main';

const ExplorePage = () => {
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
    };
    
    return (
        <MainLayout>
            <Hero />
            <div className="flex flex-col md:flex-row mt-24 md:mt-12">
                <button
                    className="block md:hidden p-3 bg-[#0A0330] text-white rounded w-10 h-10 items-center justify-center"
                    onClick={toggleAside}
                >
                    <FiFilter />
                </button>
                <div className={`fixed inset-0 bg-white z-50 p-4 ${isAsideOpen ? 'mt-24' : 'mt-12'} transform ${isAsideOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:relative md:translate-x-0 md:w-1/5 overflow-y-auto`}>
                    <button
                        className="block md:hidden p-3 bg-[#fa5564] text-white rounded mb-4 w-10 h-10 items-center justify-center"
                        onClick={toggleAside}
                    >
                        <FiX />
                    </button>
                    <Aside />
                </div>
                <div className="w-full md:w-4/5 mt-3 md:mt-0">
                    <Main />
                </div>
            </div>
        </MainLayout>
    );
}

export default ExplorePage;