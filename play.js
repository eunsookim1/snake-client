const { connect } = require("./client.js");
const { setupInput } = require('./input');

console.log("Connecting ...");


const connection = connect();
connection.on("data", (data) => {
  console.log(data);// idle message
});
setupInput(connection);   // or can type: setupInput(connect());