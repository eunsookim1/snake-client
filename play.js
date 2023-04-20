const { connect } = require("./client.js");
const { setupInput } = require('./input');

console.log("Connecting ...");


// setupInput(connect());

const connection = connect();
connection.on("data", (data) => {
  console.log(data);// idle message
});
setupInput(connection);