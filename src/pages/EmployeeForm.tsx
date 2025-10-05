import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Employee, CreateEmployeeData } from '../types/Employee';
import { employeeService } from '../services/employeeService';

interface FormData {
  nome: string;
  cargo: string;
  setor: string;
  turno: string;
  salario: number;
}

const EmployeeForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialLoading, setInitialLoading] = useState(isEditing);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<FormData>({ defaultValues: { nome: '', cargo: '', setor: '', turno: '', salario: 0 } });

  useEffect(() => {
    if (isEditing && id) {
      loadEmployee(parseInt(id));
    }
  }, [id, isEditing]);

  const loadEmployee = async (employeeId: number) => {
    try {
      setInitialLoading(true);
      const employee = await employeeService.getById(employeeId);
      setValue('nome', employee.nome);
      setValue('cargo', employee.cargo);
      setValue('setor', employee.setor);
      setValue('turno', employee.turno);
      setValue('salario', employee.salario);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar dados do funcionário');
      console.error(err);
    } finally {
      setInitialLoading(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setError(null);

      const employeeData: CreateEmployeeData = {
        nome: data.nome,
        cargo: data.cargo,
        setor: data.setor,
        turno: data.turno,
        salario: Number(data.salario)
      };

      if (isEditing && id) {
        await employeeService.update(parseInt(id), { ...employeeData, id: parseInt(id) });
      } else {
        await employeeService.create(employeeData);
      }

      navigate('/funcionarios');
    } catch (err) {
      setError(isEditing ? 'Erro ao atualizar funcionário' : 'Erro ao criar funcionário');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/funcionarios');
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados do funcionário...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isEditing ? 'Editar Funcionário' : 'Novo Funcionário'}
            </h1>
            <p className="text-gray-600">
              {isEditing 
                ? 'Atualize as informações do funcionário' 
                : 'Preencha os dados para cadastrar um novo funcionário'
              }
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  {...register('nome', {
                    required: 'Nome é obrigatório',
                    minLength: {
                      value: 2,
                      message: 'Nome deve ter pelo menos 2 caracteres'
                    },
                    maxLength: {
                      value: 100,
                      message: 'Nome deve ter no máximo 100 caracteres'
                    }
                  })}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.nome ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Digite o nome completo do funcionário"
                />
                {errors.nome && (
                  <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
                )}
              </div>

              {/* Cargo */}
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-2">
                  Cargo *
                </label>
                <select
                  id="cargo"
                  {...register('cargo', {
                    required: 'Cargo é obrigatório'
                  })}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.cargo ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione um setor</option>
                  <option value="Médico">Médico</option>
                  <option value="Enfermeira">Enfermeira</option>
                  <option value="Técnica em Enfermagem">Técnica em Enfermagem</option>
                  <option value="Fisioterapeuta">Fisioterapeuta</option>
                  <option value="Nutricionista">Nutricionista</option>
                  <option value="Psicólogo">Psicólogo</option>
                  <option value="Farmacêutico">Farmacêutico</option>
                  <option value="Assistente Social">Assistente Social</option>
                  <option value="Técnico em Radiologia">Técnico em Radiologia</option>
                  <option value="Auxiliar Administrativo">Auxiliar Administrativo</option>
                  <option value="Recepcionista">Recepcionista</option>
                  <option value="Segurança">Segurança</option>
                  <option value="Limpeza">Limpeza</option>
                  <option value="Manutenção">Manutenção</option>
                </select>
                {errors.cargo && (
                  <p className="mt-1 text-sm text-red-600">{errors.cargo.message}</p>
                )}
              </div>

              {/* Setor */}
              <div>
                <label htmlFor="setor" className="block text-sm font-medium text-gray-700 mb-2">
                  Setor *
                </label>
                <select
                  id="setor"
                  {...register('setor', {
                    required: 'Setor é obrigatório'
                  })}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.setor ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione um setor</option>
                  <option value="UTI">UTI</option>
                  <option value="Emergência">Emergência</option>
                  <option value="Clínica Médica">Clínica Médica</option>
                  <option value="Cirurgia">Cirurgia</option>
                  <option value="Pediatria">Pediatria</option>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Neurologia">Neurologia</option>
                  <option value="Oncologia">Oncologia</option>
                  <option value="Reabilitação">Reabilitação</option>
                  <option value="Nutrição Clínica">Nutrição Clínica</option>
                  <option value="Farmácia">Farmácia</option>
                  <option value="Laboratório">Laboratório</option>
                  <option value="Radiologia">Radiologia</option>
                  <option value="Administração">Administração</option>
                  <option value="Recursos Humanos">Recursos Humanos</option>
                  <option value="Financeiro">Financeiro</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Segurança">Segurança</option>
                </select>
                {errors.setor && (
                  <p className="mt-1 text-sm text-red-600">{errors.setor.message}</p>
                )}
              </div>

              {/* Turno */}
              <div>
                <label htmlFor="turno" className="block text-sm font-medium text-gray-700 mb-2">
                  Turno *
                </label>
                <select
                  id="turno"
                  {...register('turno', {
                    required: 'Turno é obrigatório'
                  })}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.turno ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione um setor</option>
                  <option value="Diurno (6h às 14h)">Diurno (6h às 14h)</option>
                  <option value="Vespertino (14h às 22h)">Vespertino (14h às 22h)</option>
                  <option value="Noturno (22h às 6h)">Noturno (22h às 6h)</option>
                </select>
                {errors.turno && (
                  <p className="mt-1 text-sm text-red-600">{errors.turno.message}</p>
                )}
              </div>

              {/* Salário */}
              <div>
                <label htmlFor="salario" className="block text-sm font-medium text-gray-700 mb-2">
                  Salário (R$) *
                </label>
                <input
                  type="number"
                  id="salario"
                  step="0.01"
                  min="0"
                  {...register('salario', {
                    required: 'Salário é obrigatório',
                    min: {
                      value: 1320,
                      message: 'Salário deve ser pelo menos R$ 1.320,00 (salário mínimo)'
                    },
                    max: {
                      value: 100000,
                      message: 'Salário deve ser no máximo R$ 100.000,00'
                    }
                  })}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.salario ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="0.00"
                />
                {errors.salario && (
                  <p className="mt-1 text-sm text-red-600">{errors.salario.message}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-end sm:space-x-4 space-y-3 sm:space-y-0 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-full sm:w-auto px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {isEditing ? 'Atualizando...' : 'Salvando...'}
                    </div>
                  ) : (
                    isEditing ? 'Atualizar Funcionário' : 'Salvar Funcionário'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;

