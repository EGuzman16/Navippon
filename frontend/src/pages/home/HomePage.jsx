import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero';
import InfoPill from './container/InfoPill';
import CategoryCarousel from './container/CategoryCarrusel';
import CTA from './container/CTA';
import RegionCarrusel from './container/RegionCarrusel';
import ActivityCarrusel from './container/ActivityCarrusel';
import ArticleCarrusel from './container/ArticleCarrusel';


const HomePage = () => {
    return <MainLayout>
        <Hero />
        <InfoPill />
        <CategoryCarousel />
        <CTA />
        <RegionCarrusel />
        <ActivityCarrusel />
        <ArticleCarrusel />
    </MainLayout>};

export default HomePage