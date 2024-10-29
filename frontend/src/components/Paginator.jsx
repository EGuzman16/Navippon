import React from 'react';

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <div className="flex justify-center mt-6 mb-6">
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`mx-1 px-3 py-1 border rounded ${page === currentPage ? 'bg-[#FA5564] text-white' : 'bg-white text-[#FA5564]'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Paginator;