# Catálogo de Produtos em Firestore

Este projeto implementa um **CRUD (Create, Read, Update, Delete)** de produtos utilizando o **Firebase Firestore**.  
Foi desenvolvido como parte da disciplina de **Engenharia de Software / Design e Desenvolvimento de Banco de Dados**.

---

## 🚀 Funcionalidades

O sistema permite gerenciar um catálogo de produtos com os seguintes campos:

- **nome** (string)
- **categoria** (string)
- **preco** (number)
- **disponivel** (boolean)

Operações implementadas:

- **CREATE** → Adicionar produto
- **READ** → Listar produtos
- **UPDATE** → Atualizar produto (preço, categoria, nome, disponibilidade)
- **DELETE** → Excluir produto

---

## 📂 Estrutura do Código

- `adicionarProduto()` → Insere um novo documento na coleção `produtos`.
- `listarProdutos()` → Lista todos os documentos da coleção, ordenados por nome, exibindo os campos em linhas separadas.
- `atualizarProduto(id)` → Atualiza os dados de um produto existente pelo seu ID.
- `excluirProduto(id)` → Remove um produto da coleção pelo seu ID.
- Fluxo principal (`async () => { ... }`) → Executa as operações em sequência: criar → listar → atualizar → listar → excluir → listar.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Firebase](https://firebase.google.com/)
- Firestore (Banco de Dados NoSQL do Firebase)

---

## ⚙️ Configuração

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Ative o **Firestore Database**.
3. Copie as credenciais do seu projeto (objeto `firebaseConfig`) e substitua no código.
4. Instale as dependências:
   ```bash
   npm install firebase
