import React from 'react';

const Section1 = () => {
    return (
        <section className="relative p-8 -mt-12 rounded-t-3xl bg-white">
        <div className="flex flex-col items-center p-3 mt-1">
        <h3 className="mb-4 text-center text-2xl">Navega Japón a través de nuestro blog</h3>
                        
            <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['Cultura', 'Gatronomía', 'Viajes', 'Eventos', 'Novedades'].map(tag => (
                    <button 
                        key={tag} 
                        className="bg-[#0A0330] text-white px-4 py-2 rounded hover:bg-[#FF4A5A]"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
        </section>
    );
}

export default Section1;