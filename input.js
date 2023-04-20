// stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) { // belongs to play.js file
  connection = conn; // to use conn;
  const stdin = process.stdin; // process.stdin tells node from client
  stdin.setRawMode(true); // when I type something in terminal for interpreting
  stdin.setEncoding("utf8");
  stdin.resume(); // socket to continue communication
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function(key) {
  // console.log('data', data);
  
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
};

module.exports = { setupInput };