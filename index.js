var mysql = require('mysql');

var con = mysql.createConnection({
  host: "halle-history.cluster-ctiiwouaw2qm.eu-west-2.rds.amazonaws.com",
  user: "admin",
  password: process.env.HALLE_DB_PASS
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});