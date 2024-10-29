import React from 'react';
import ArticleCard from '../../../components/ArticleCard';
import Paginator from '../../../components/Paginator';

const Section2 = () => {
    const articles = Array.from({ length: 6 }, (_, index) => (
        <ArticleCard key={index} />
    ));

    return (
        <div className='pl-12 pr-12'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {articles}
            </div>
            <Paginator />
        </div>
    );
};

export default Section2;