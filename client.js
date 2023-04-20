const net = require("net");
// I am using Node's net library


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Connect event
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ESK');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 500);
  });
  
  return conn;
};

module.exports = { connect };