import { Employee, CreateEmployeeData, UpdateEmployeeData } from '../types/Employee';

const API_BASE_URL = 'http://localhost:3000';

export const employeeService = {
  // Buscar todos os funcionários
  async getAll(): Promise<Employee[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/funcionarios`);
      if (!response.ok) {
        throw new Error('Erro ao buscar funcionários');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
      throw error;
    }
  },

  // Buscar funcionário por ID
  async getById(id: number): Promise<Employee> {
    try {
      const response = await fetch(`${API_BASE_URL}/funcionarios/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar funcionário');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar funcionário:', error);
      throw error;
    }
  },

  // Criar novo funcionário
  async create(employeeData: CreateEmployeeData): Promise<Employee> {
    try {
      const response = await fetch(`${API_BASE_URL}/funcionarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });
      if (!response.ok) {
        throw new Error('Erro ao criar funcionário');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao criar funcionário:', error);
      throw error;
    }
  },

  // Atualizar funcionário
  async update(id: number, employeeData: UpdateEmployeeData): Promise<Employee> {
    try {
      const response = await fetch(`${API_BASE_URL}/funcionarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar funcionário');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao atualizar funcionário:', error);
      throw error;
    }
  },

  // Deletar funcionário
  async delete(id: number): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/funcionarios/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao deletar funcionário');
      }
    } catch (error) {
      console.error('Erro ao deletar funcionário:', error);
      throw error;
    }
  },
};
