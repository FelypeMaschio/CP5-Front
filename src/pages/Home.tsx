import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hospital das Clínicas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Faculdade de Medicina da Universidade de São Paulo
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
              Referência nacional em assistência médica, ensino e pesquisa, 
              oferecendo cuidados de excelência há mais de 75 anos.
            </p>
            <Link
              to="/funcionarios"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Acessar Sistema de Funcionários
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Featured Article */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="/hc-aerial.jpg"
                    alt="Vista aérea do Hospital das Clínicas"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    DESTAQUE INSTITUCIONAL
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    HC-FMUSP Entre os Melhores Hospitais do Mundo
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    O Hospital das Clínicas da Faculdade de Medicina da USP foi reconhecido 
                    internacionalmente como um dos melhores hospitais do mundo pela revista 
                    Newsweek. Esta conquista reflete nosso compromisso contínuo com a 
                    excelência em assistência médica, inovação tecnológica e formação 
                    de profissionais de saúde.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Com mais de 2.200 leitos e atendendo cerca de 1 milhão de consultas 
                    ambulatoriais por ano, o HC-FMUSP mantém sua posição de liderança 
                    na medicina brasileira, oferecendo tratamentos de alta complexidade 
                    e desenvolvendo pesquisas que beneficiam pacientes em todo o país.
                  </p>
                  <div className="text-sm text-gray-500">
                    Publicado em 15 de outubro de 2024
                  </div>
                </div>
              </div>
            </article>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">2.200+</div>
                <div className="text-gray-600">Leitos Hospitalares</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">1M+</div>
                <div className="text-gray-600">Consultas Anuais</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">15.000+</div>
                <div className="text-gray-600">Funcionários</div>
              </div>
            </div>

            {/* About Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sobre o Hospital das Clínicas
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Fundado em 1944, o Hospital das Clínicas da Faculdade de Medicina da 
                  Universidade de São Paulo é um complexo hospitalar público que integra 
                  assistência, ensino e pesquisa médica de forma única no Brasil.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Nosso compromisso é oferecer atendimento médico de excelência, formar 
                  profissionais qualificados e desenvolver pesquisas que contribuam para 
                  o avanço da medicina nacional e internacional.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Com uma equipe multidisciplinar altamente qualificada, o HC-FMUSP 
                  atende pacientes de todo o país, sendo referência em diversas 
                  especialidades médicas e tratamentos de alta complexidade.
                </p>
                <Link
                  to="/funcionarios"
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
                >
                  Conheça Nossa Equipe
                </Link>
              </div>
              <div>
                <img
                  src="/hc-instituto.png"
                  alt="Instituto Central do Hospital das Clínicas"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
