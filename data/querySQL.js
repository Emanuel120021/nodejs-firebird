const inserts = require("../data/inserts.js");

const querySelect = "SELECT * FROM clientes";

const queryInsert = `INSERT INTO  ${Cliente.tabela} (${Cliente.values.nome}, 
                                    ${Cliente.values.email}, 
                                    ${Cliente.values.telefone}) 

                            VALUES ('${Cliente.content.nome}', 
                                    '${Cliente.content.email}', 
                                    '${Cliente.content.telefone}')`;

const queryDelete = `DELETE FROM ${Cliente.tabela} WHERE ID < 100`;

module.exports = {
  queryInsert,
  querySelect,
  queryDelete,
};
