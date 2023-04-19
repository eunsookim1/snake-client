const { connect } = require("./client.js");

console.log("Connecting ...");
const connection = connect();
// console.log(connection);

// connection.on("data", (data) => {
//   console.log('abc', data);// code that does something when the connection is first established
// });

const handleUserInput = function(data) {
  // console.log('data', data);
  
  if (data === 'w') {
    connection.write('Move: up');
  }
  if (data === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin; // process.stdin tells node from client
  stdin.setRawMode(true); // when I type something in terminal for interpreting
  stdin.setEncoding("utf8");
  stdin.resume(); // socket to continue communication
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
};

// module.exports = setupInput;
setupInput();
