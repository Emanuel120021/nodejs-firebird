module.exports = Cliente = {
  content: {
    nome: "Novo Cliente",
    email: "novo@cliente.com",
    telefone: "123456789",
  },
  values: {
    nome: "nome",
    email: "email",
    telefone: "telefone",
  },
  tabela: "clientes",
};

module.exports = campoValor = {
  campo: "nome", // Nome do campo a ser alterado
  valor: "novo Nome", // Novo valor inserido no campo
  condicaoUpdate: "ID = 1", // Condição para alteração
  condicaoDelete: "ID = 2", // Condição para delete
  tabela: "clientes",
};
