const connect = require("./client.js");

console.log("Connecting ...");
const connection = connect();

connection.on("data", (data) => {
  console.log(data);// code that does something when the connection is first established
});
