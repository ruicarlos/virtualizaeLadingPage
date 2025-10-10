import React from 'react';
import icon1 from '../assets/funcionalidades/1.png';
import icon2 from '../assets/funcionalidades/2.png';
import icon3 from '../assets/funcionalidades/3.png';
import icon4 from '../assets/funcionalidades/4.png';
import icon5 from '../assets/funcionalidades/5.png';
import icon6 from '../assets/funcionalidades/6.png';
const features = [
  {
    iconSrc: icon1,
    title: "Visualização em Realidade Aumentada",
  },
  {
    iconSrc: icon2,
    title: "Filtros de visualização Inteligentes",
  },
  {
    iconSrc: icon3,
    title: "Anotações e Comentários",
  },
  {
    iconSrc: icon4,
    title: "Mapeamento organizado por Ambientes",
  },
  {
    iconSrc: icon5,
    title: "Acesso Seguro por QR Code",
  },
  {
    iconSrc: icon6,
    title: "Documentação Centralizada",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-normal tracking-wider uppercase mb-4">
            Funcionalidades
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Funcionalidades em Destaque
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1C1C1E] rounded-2xl p-6 flex flex-col items-start text-left aspect-square min-h-0"
            >
              <img
                src={feature.iconSrc}
                alt={feature.title}
                className="w-15 h-15 mb-4"
              />
              <h3 className="text-base font-medium text-gray-200 leading-snug">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;