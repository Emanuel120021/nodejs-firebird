const Firebird = require("node-firebird");
const options = require("../config/config.js");
const novoCliente = require("../src/main.js");

module.exports = executeQuery;

function executeQuery(query, callback) {
  Firebird.attach(options, function (err, db) {
    if (err) {
      console.error("1. Erro ao conectar ao banco de dados:", err);
      return;
    }

    db.query(query, (err, result) => {
      if (err) {
        console.error("2. Erro ao conectar ao banco de dados:", err);
        return;
      }

      callback(result);

      db.detach(function (err) {
        if (err) {
          console.error("Erro ao desconectar do banco de dados:", err);
          return;
        }
      });
    });
  });
}
