// contains constants, hard-coded data
const IP = 'localhost';
const PORT = 50541;
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