const Firebird = require("node-firebird");
const options = require("../config/config.js");
const novoCliente = require("../src/main.js");

module.exports = executeQuery;

function executeQuery(query, callback) {
  Firebird.attach(options, function (err, db) {
    if (err) throw err;

    db.query(query, (err, result) => {
      if (err) throw err;

      callback(result);

      db.detach(function (err) {
        if (err) throw err;
      });
    });
  });
}
