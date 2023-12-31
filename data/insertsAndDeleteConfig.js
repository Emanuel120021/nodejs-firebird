campoValorAdicionar = {
  values: {
    nome: "Emanuel",
    email: "emanuel.lazaro.52@gmail.com",
    telefone: "123456789",
  },

  // Só alterar o valor abaixo abaixo se houver alguma alteração de campo na tabela
  campo: {
    nome: "nome",
    email: "email",
    telefone: "telefone",
  },
  tabela: "clientes",
};

campoCondicaoDelete = {
  condicaoDelete: "", // Condição para delete
  tabelaDelete: "clientes",
};

campoValorUpdate = {
  campo: "nome", // Nome do campo a ser alterado
  valor: "novo Nome", // Novo valor inserido no campo
  condicaoUpdate: "ID = 1", // Condição para alteração
};

module.exports = {
  campoValorAdicionar,
  campoCondicaoDelete,
  campoValorUpdate,
};
