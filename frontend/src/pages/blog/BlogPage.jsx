import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero';
import Section1 from './container/Section1';
import Section2 from './container/Section2';

const BlogPage = () => {
    return <MainLayout>
        <Hero />
        <Section1 />
        <Section2 />
    </MainLayout>
}

export default BlogPage