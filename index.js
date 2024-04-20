var mysql = require("mysql");

var con = mysql.createConnection({
  host: "", // I've turned off the database as turns out it's charging per hour. Sorry I should have said at the end of the day. If you install mysql locally you should be able to access the DB in the same way by using localhost as the host here
  user: "admin",
  password: process.env.HALLE_DB_PASS,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
