# HC-FMUSP - Sistema de Registo de Funcionários

Este projeto implementa um sistema de registo de funcionários para o Hospital das Clínicas da Faculdade de Medicina da USP, utilizando React, Vite, TypeScript e Tailwind CSS. O sistema permite realizar operações CRUD (Criar, Ler, Atualizar, Excluir) para gerenciar os dados dos funcionários.

## Membros da Equipe

- **Nome:** [Seu Nome]
  - **RM:** [Seu RM]
- **Nome:** [Nome do Colega 1]
  - **RM:** [RM do Colega 1]
- **Nome:** [Nome do Colega 2]
  - **RM:** [RM do Colega 2]

## Repositório GitHub

[Link para o Repositório GitHub](https://github.com/seu-usuario/hc-fmusp-employee-registry)

## Tecnologias Utilizadas

- **Frontend:** React 18.3.1, Vite 5.2.1, TypeScript 5.4.5
- **Estilização:** Tailwind CSS 3.4.13
- **Roteamento:** React Router DOM 6.23.1
- **Gerenciamento de Formulários:** React Hook Form 7.45.0
- **API Mock:** JSON-Server (versão estável)

## Estrutura do Projeto

```
hc-fmusp-employee-registry/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── EmployeeForm.tsx
│   │   ├── EmployeeList.tsx
│   │   └── Home.tsx
│   ├── services/
│   │   └── employeeService.ts
│   ├── types/
│   │   └── Employee.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── db.json
├── routes.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/hc-fmusp-employee-registry.git
    cd hc-fmusp-employee-registry
    ```

2.  **Instale as dependências:**

    Certifique-se de ter o `npm` instalado. Em seguida, instale todas as dependências do projeto:

    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    Este comando iniciará tanto o servidor JSON-Server (na porta 3000) quanto a aplicação React (geralmente na porta 5173 ou similar).

    ```bash
    npm run dev
    ```

4.  **Acesse a aplicação:**

    Abra seu navegador e acesse `http://localhost:5173/` (ou a porta indicada pelo Vite no terminal).

## Endpoints da API (JSON-Server)

O JSON-Server está configurado para rodar na porta `3000` e serve os dados dos funcionários no endpoint `/funcionarios`.

-   **GET /funcionarios:** Retorna todos os funcionários.
-   **GET /funcionarios/:id:** Retorna um funcionário específico pelo ID.
-   **POST /funcionarios:** Cria um novo funcionário.
-   **PUT /funcionarios/:id:** Atualiza um funcionário existente pelo ID.
-   **DELETE /funcionarios/:id:** Exclui um funcionário pelo ID.

## Requisitos do Projeto

-   Uso de `npm` para gerenciamento de pacotes.
-   Manutenção da estrutura de projeto e histórico de commits existentes.
-   Todas as páginas incluem cabeçalho e rodapé.
-   Validações de formulário implementadas com React Hook Form.
-   Design responsivo utilizando Tailwind CSS.
-   Execução local via `npm run dev`.
-   JSON Server acessível em `http://localhost:3000/funcionarios`.
-   Não modificação de código relacionado ao Sprint 3.
-   Campos de funcionário: `id`, `nome`, `cargo`, `setor`, `turno`, `salario`.

