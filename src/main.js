const executeQuery = require("../queries/queries.js");
const {
  querySelect,
  queryInsert,
  queryDelete,
} = require("../data/querySQL.js");

function listQuery() {
  executeQuery(querySelect, (result) => {
    result.forEach((row) => {
      console.log(row);
    });
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

//Exportar uma função sem retorno:
module.exports = {
  listQuery: listQuery,
  addQuery: addQuery,
  deleteQuery: deleteQuery,
};
