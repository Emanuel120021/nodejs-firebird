const inserts = require("./insertsConfig.js");

const querySelect = "SELECT * FROM clientes ROWS 1";

const queryInsert = `INSERT INTO  ${campoValorAdicionar.tabela} (${campoValorAdicionar.campo.nome}, 
                                    ${campoValorAdicionar.campo.email}, 
                                    ${campoValorAdicionar.campo.telefone}) 

                            VALUES ('${campoValorAdicionar.values.nome}', 
                                    '${campoValorAdicionar.values.email}', 
                                    '${campoValorAdicionar.values.telefone}')`;

const queryDelete = `DELETE FROM ${campoCondicaoDelete.tabelaDelete} 
                            WHERE ${campoCondicaoDelete.condicaoDelete}`;

const queryUpdate = `UPDATE ${campoValorUpdate.tabela}
                    SET  ${campoValorUpdate.campo} = '${campoValorUpdate.valor}'
                    WHERE ${campoValorUpdate.condicaoUpdate}`;

const queryRestartGen = `ALTER SEQUENCE GEN_CLIENTES_ID RESTART WITH 0`;

module.exports = {
  queryInsert,
  querySelect,
  queryDelete,
  queryRestartGen,
  queryUpdate,
};
