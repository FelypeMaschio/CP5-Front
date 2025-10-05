import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hospital das Clínicas</h3>
            <p className="text-gray-300 text-sm">
              Faculdade de Medicina da Universidade de São Paulo
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Excelência em assistência, ensino e pesquisa médica.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-300 text-sm">
              Av. Dr. Enéas Carvalho de Aguiar, 255
            </p>
            <p className="text-gray-300 text-sm">
              Cerqueira César - São Paulo/SP
            </p>
            <p className="text-gray-300 text-sm">
              CEP: 05403-000
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Sistema</h3>
            <p className="text-gray-300 text-sm">
              Sistema de Cadastro de Funcionários
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Checkpoint 5 - Gestão de Recursos Humanos
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Hospital das Clínicas - FMUSP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
