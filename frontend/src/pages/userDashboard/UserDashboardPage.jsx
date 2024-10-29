import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import Aside from './container/Aside';
import BlogMain from './container/BlogMain';
import FavoriteMain from './container/FavoriteMain';
import RecommendationMain from './container/RecommendationMain';
import TripMain from './container/TripMain';
import { FaRegCircleUser } from "react-icons/fa6";
import { FiX } from 'react-icons/fi';

const UserDashboardPage = () => {
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
    };

    const closeAside = () => {
        setIsAsideOpen(false);
    };

    return (
        <MainLayout>
            <div className="flex flex-col md:flex-row ">
                <button
                    className="block md:hidden mt-4 p-3 bg-[#0A0330] text-white rounded w-10 h-10 items-center justify-center"
                    onClick={toggleAside}
                >
                    <FaRegCircleUser />
                </button>
                <div className={`fixed inset-0 rounded-r bg-[#e1e9ed] z-50 ${isAsideOpen ? 'mt-24' : 'mt-12'} transform ${isAsideOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:relative md:translate-x-0 md:w-1/5 md:mt-0 overflow-y-auto`}>
                    <button
                        className="block md:hidden p-3 bg-[#fa5564] text-white rounded mb-4 w-10 h-10 items-center justify-center"
                        onClick={toggleAside}
                    >
                        <FiX />
                    </button>
                    <Aside closeAside={closeAside} /> 
                </div>
                <div className="w-full md:w-4/5 md:mt-0">
                    <Routes>
                        <Route index element={<FavoriteMain />} />
                        <Route path="mytrips" element={<TripMain />} />
                        <Route path="myfavorites" element={<FavoriteMain />} />
                        <Route path="myblogs" element={<BlogMain />} />
                        <Route path="myrecommendations" element={<RecommendationMain />} />
                    </Routes>
                </div>
            </div>
        </MainLayout>
    );
}

export default UserDashboardPage;