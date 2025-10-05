import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funcionarios" element={<EmployeeList />} />
          <Route path="/funcionarios/novo" element={<EmployeeForm />} />
          <Route path="/funcionarios/editar/:id" element={<EmployeeForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
