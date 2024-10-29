import React from 'react';
import MainLayout from '../../components/MainLayout';
import Aside from './container/Aside';
import Main from './container/Main';

const ArticleDetailPage = () => {
    return (
        <MainLayout>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                <div className="md:col-span-7">
                    <Main />
                </div>
                <div className="md:col-span-3">
                    <Aside />
                </div>
            </div>
        </MainLayout>
    );
};

export default ArticleDetailPage;