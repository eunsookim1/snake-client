const net = require("net");   // I am using Node's net library
const { IP, PORT } = require('./constants');


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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

// Message is broadcast to each connected client to inform a new player has joined
//