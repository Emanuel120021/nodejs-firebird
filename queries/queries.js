const Firebird = require("node-firebird");
const options = require("../config/config.js");

module.exports = executeQuery;
module.exports = insertCliente;

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

function insertCliente(query, callback) {
  executeQuery(query, callback);
}
