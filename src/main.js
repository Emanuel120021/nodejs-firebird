const executeQuery = require("../queries/queries.js");
const insertCliente = require("../queries/queries.js");
const inserts = require("../data/inserts.js");

const querySelect = "SELECT * FROM clientes";

const queryInsert = `INSERT INTO  ${novoCliente.tabela} (${novoCliente.values.nome}, 
                                    ${novoCliente.values.email}, 
                                    ${novoCliente.values.telefone}) 

                            VALUES ('${novoCliente.content.nome}', 
                                    '${novoCliente.content.email}', 
                                    '${novoCliente.content.telefone}')`;

executeQuery(querySelect, (result) => {
  result.forEach((row) => {
    console.log(row);
  });
});

// insertCliente(queryInsert, (result) => {
//   console.log("Cliente adicionado");
// });
