const executeQuery = require("../queries/queries.js");
const {
  querySelect,
  queryInsert,
  queryDelete,
  queryRestartGen,
  queryUpdate,
} = require("../data/querySQL.js");

function listQuery() {
  let resultTest = {};
  executeQuery(querySelect, (result) => {
    result.forEach((row) => {
      console.log(row);
    });
    resultTest = result;
    if (resultTest.length == 0) {
      executeQuery(queryRestartGen, (result) => {});
      //console.log("Chegou aqui");
    }
  });
}

function addQuery() {
  executeQuery(queryInsert, (result) => {
    return console.log("Cliente adicionado");
  });
}

function deleteQuery() {
  executeQuery(queryDelete, (result) => {
    return console.log("Cliente(s) removido(s)");
  });
}

function updateQuery() {
  executeQuery(queryUpdate, (result) => {
    return console.log("Cliente(s) alterado(s) com sucesso");
  });
}

//EXPORTAR UMA FUNÇÃO SEM RETORNO
module.exports = {
  listQuery: listQuery,
  addQuery: addQuery,
  deleteQuery: deleteQuery,
  updateQuery: updateQuery,
};
