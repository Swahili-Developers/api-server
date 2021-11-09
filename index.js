const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", function (req, res) {
  res.send("Server Api is Running");
});

app.get("/users", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

const server = app.listen(9090, function () {
  let address = server.address().address;
  let port = server.address().port;
  console.log("Api is running at http://%s:%s", address, port);
});
