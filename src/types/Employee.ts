export interface Employee {
  id: number;
  nome: string;
  cargo: string;
  setor: string;
  turno: string;
  salario: number;
}

export interface CreateEmployeeData {
  nome: string;
  cargo: string;
  setor: string;
  turno: string;
  salario: number;
}

export interface UpdateEmployeeData extends CreateEmployeeData {
  id: number;
}
