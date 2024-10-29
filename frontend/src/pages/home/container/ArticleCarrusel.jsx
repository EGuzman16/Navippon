import React, { useState, useEffect } from 'react';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import ArticleCard from '../../../components/ArticleCard';

const ArticleCarrusel = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(4);
    const cards = [<ArticleCard />, <ArticleCard />, <ArticleCard />, <ArticleCard />, <ArticleCard />, <ArticleCard />, <ArticleCard />, <ArticleCard />]; // Ejemplo de 8 tarjetas

    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth < 640) {
                setCardsPerPage(2);
            } else {
                setCardsPerPage(4);
            }
        };

        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);

        return () => {
            window.removeEventListener('resize', updateCardsPerPage);
        };
    }, []);

    const totalPages = Math.ceil(cards.length / cardsPerPage);

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const startIndex = currentPage * cardsPerPage;
    const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

    return (
        <div className="article-carousel my-12 p-6">
            <h2 className="text-left pt-4 mb-4 text-2xl">Navega nuestras últimas noticias</h2>
            <div className="cards-container flex justify-center flex-wrap p-6">
                {currentCards.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
                        {card}
                    </div>
                ))}
            </div>
            <div className="controls flex justify-center mt-4 space-x-16">
                <button onClick={handlePrev} className="px-4 py-2">
                    <RxDoubleArrowLeft size={24} color="#222B45" />
                </button>
                <button onClick={handleNext} className="px-4 py-2">
                    <RxDoubleArrowRight size={24} color="#222B45" />
                </button>
            </div>
        </div>
    );
}

export default ArticleCarrusel;