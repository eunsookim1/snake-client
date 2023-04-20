// contains constants, hard-coded data
const IP = 'localhost'; // IP address here
const PORT = 50541;     // Port number here

const movements = {
  w: 'Move: up',
  s: 'Move: down',
  d: 'Move: right',
  a: 'Move: left'
};

const mappings = {
  c: `Congratulations!`,
  p: `Great Play!`,
  x: `y`
};

module.exports = { IP, PORT, movements, mappings};