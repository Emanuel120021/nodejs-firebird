const inserts = require("./insertsConfig.js");

const querySelect = "SELECT * FROM clientes ROWS 1";

const queryInsert = `INSERT INTO  ${Cliente.tabela} (${Cliente.values.nome}, 
                                    ${Cliente.values.email}, 
                                    ${Cliente.values.telefone}) 

                            VALUES ('${Cliente.content.nome}', 
                                    '${Cliente.content.email}', 
                                    '${Cliente.content.telefone}')`;

const queryDelete = `DELETE FROM ${Cliente.tabela} WHERE ${campoValor.condicaoDelete}`;

const queryUpdate = `UPDATE ${campoValor.tabela}
                    SET  ${campoValor.campo} = '${campoValor.valor}'
                    WHERE ${campoValor.condicaoUpdate}`;

const queryRestartGen = `ALTER SEQUENCE GEN_CLIENTES_ID RESTART WITH 0`;

module.exports = {
  queryInsert,
  querySelect,
  queryDelete,
  queryRestartGen,
  queryUpdate,
};
