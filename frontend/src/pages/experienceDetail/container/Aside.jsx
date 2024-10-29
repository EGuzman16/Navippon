import React from 'react';
import { MdOutlineForest } from 'react-icons/md';
import { TbBuildingMonument } from 'react-icons/tb';
import { FaLandmark } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaClock, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

const info = {
    telefono: "000-000-000",
    mail: "mail@gmail.com",
    web: "http://www.kyoto.com.ja",
    horarios: "00.00 a 00.00",
    epoca: "Todo el año",
    precio: "$ 00.00",
    categorias: [
        { icon: <MdOutlineForest color="#fa5564" size="2em" />, label: "Naturaleza" },
        { icon: <TbBuildingMonument color="#fa5564" size="2em" />, label: "Monumento" }
    ],
    mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.935353897913!2d135.7680293152586!3d35.0116369803577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001089d7f2b9b1b%3A0x2d8694b2b1b1b1b1!2sKyoto%2C%20Japan!5e0!3m2!1sen!2sus!4v1616581234567!5m2!1sen!2sus&z=15", // Ajuste de zoom
    ubicacion: {
        icon: <FaLandmark className="inline-block mr-2" color="#FF4A5A" />,
        content: "Cerca de áreas de puntos de interés"
    },
    tipoAlojamiento: "-",
    servicios: "-",
    tipoViaje: "-",
    tipoRestaurante: "-",
    tipoCocina: "-"
};

const isNullOrEmpty = (value) => {
    return value === null || value === "" || value === "-";
};

const Aside = () => {
    return (
        <div>
            {/* Mapa de Google */}
            <div className="mt-12 md:mt-0 mb-12" style={{ height: '400px', position: 'relative' }}>
                <iframe
                    src={info.mapaEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mapa de Google"
                    className="w-full h-full rounded-lg"
                ></iframe>
            </div>

            {/* Información Útil */}
            <div className="bg-[#f4f4f4] p-4 rounded-lg text-black mb-4">
                <h4 className="font-bold mb-2">Información Útil</h4>
                <p><FaPhoneAlt className="inline-block mr-2 text-[#FA5564]" /> Teléfono: {info.telefono}</p>
                <p><FaEnvelope className="inline-block mr-2 text-[#FA5564]" /> Mail: {info.mail}</p>
                <p><FaGlobe className="inline-block mr-2 text-[#FA5564]" /> Web: <a href={info.web} target="_blank" rel="noopener noreferrer">{info.web}</a></p>
                <p><FaClock className="inline-block mr-2 text-[#FA5564]" /> Horarios: {info.horarios}</p>
                <p><FaCalendarAlt className="inline-block mr-2 text-[#FA5564]" /> Época: {info.epoca}</p>
                <p><FaDollarSign className="inline-block mr-2 text-[#FA5564]" /> Precio estimado: {info.precio}</p>
            </div>

            {/* Categoría */}
            <div className="bg-white border border-[#f4f4f4] rounded-lg text-black mb-4">
                <h4 className="font-bold mb-2 bg-[#f4f4f4] text-black p-2 rounded">Categoría</h4>
                <div className="flex flex-row items-start text-center ml-2">
                    {info.categorias.map((categoria, index) => (
                        <div key={index} className="flex flex-col items-center mr-4">
                            <div className="icon-container mb-2 bg-white shadow-lg rounded-full flex justify-center items-center" style={{ width: '80px', height: '80px' }}>
                                {categoria.icon}
                            </div>
                            <p>{categoria.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ubicación */}
            <div className="bg-white border border-[#f4f4f4] rounded-lg text-black mb-4">
                <h4 className="font-bold mb-2 bg-[#f4f4f4] text-black p-2 rounded">Ubicación</h4>
                {info.ubicacion.icon}
                <span>{info.ubicacion.content}</span>
            </div>

            {/* Tipo de alojamiento */}
            {!isNullOrEmpty(info.tipoAlojamiento) && (
                <div className="bg-white border border-[#f4f4f4] rounded-lg text-black mb-4">
                    <h4 className="font-bold mb-2 bg-[#f4f4f4] text-black p-2 rounded">Tipo de alojamiento</h4>
                    <p>{info.tipoAlojamiento}</p>
                </div>
            )}

            {/* Servicios */}
            {!isNullOrEmpty(info.servicios) && (
                <div className="bg-white border border-[#f4f4f4] rounded-lg text-black mb-4">
                    <h4 className="font-bold mb-2 bg-[#f4f4f4] text-black p-2 rounded">Servicios</h4>
                    <p>{info.servicios}</p>
                </div>
            )}

            {/* Tipo de viaje */}
            {!isNullOrEmpty(info.tipoViaje) && (
                <div className="bg-white border border-[#f4f4f4] rounded-lg text-black mb-4">
                    <h4 className="font-bold mb-2 bg-[#f4f4f4] text-black p-2 rounded">Tipo de viaje</h4>
                    <p>{info.tipoViaje}</p>
                </div>
            )}

            {/* Tipo de restaurante */}
            {!isNullOrEmpty(info.tipoRestaurante) && (
                <div className="bg-white border border-[#f4f4f4] rounded-lg text-black mb-4">
                    <h4 className="font-bold mb-2 bg-[#f4f4f4] text-black p-2 rounded">Tipo de restaurante</h4>
                    <p>{info.tipoRestaurante}</p>
                </div>
            )}

            {/* Tipo de cocina */}
            {!isNullOrEmpty(info.tipoCocina) && (
                <div className="bg-white border border-[#f4f4f4] rounded-lg text-black mb-4">
                    <h4 className="font-bold mb-2 bg-[#f4f4f4] text-black p-2 rounded">Tipo de cocina</h4>
                    <p>{info.tipoCocina}</p>
                </div>
            )}
        </div>
    );
};

export default Aside;
