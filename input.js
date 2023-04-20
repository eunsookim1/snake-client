const { movements, mappings } = require('./constants');
// stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};


const handleUserInput = function(key) {
  if (key in movements) { // using constants file to dry code
    connection.write(movements[key]);
  }

  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    console.log("Have a good day!");
    process.exit();
  }

  if (key in mappings) {
    connection.write(`Say: ${mappings[key]}`);
  }
 
};

module.exports = { setupInput };