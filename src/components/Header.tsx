import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">HC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
              <p className="text-blue-200 text-sm">FMUSP - Sistema de Funcionários</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-blue-700 text-white' 
                  : 'text-blue-200 hover:text-white hover:bg-blue-800'
              }`}
            >
              Início
            </Link>
            <Link
              to="/funcionarios"
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive('/funcionarios') 
                  ? 'bg-blue-700 text-white' 
                  : 'text-blue-200 hover:text-white hover:bg-blue-800'
              }`}
            >
              Funcionários
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex space-x-4">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
              isActive('/') 
                ? 'bg-blue-700 text-white' 
                : 'text-blue-200 hover:text-white hover:bg-blue-800'
            }`}
          >
            Início
          </Link>
          <Link
            to="/funcionarios"
            className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
              isActive('/funcionarios') 
                ? 'bg-blue-700 text-white' 
                : 'text-blue-200 hover:text-white hover:bg-blue-800'
            }`}
          >
            Funcionários
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
