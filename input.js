let connection;

const handleUserInput = function(data) {
  // console.log('data', data);
  
  if (data === 'r') {
    connection.write('Move: up');
  }
  if (data === 'f') {
    connection.write('Move: down');
  }
  if (data === 'g') {
    connection.write('Move: right');
  }
  if (data === 'd') {
    connection.write('Move: left');
  }
  if (data === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) { // belongs to play.js file
  connection = conn; // to use conn;
  const stdin = process.stdin; // process.stdin tells node from client
  stdin.setRawMode(true); // when I type something in terminal for interpreting
  stdin.setEncoding("utf8");
  stdin.resume(); // socket to continue communication
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
};

module.exports = { setupInput };