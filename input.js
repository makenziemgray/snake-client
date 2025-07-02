// input.js

let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Ctrl + C
  }

  // Movement keys
  if (key === 'w') connection.write("Move: up");
  if (key === 'a') connection.write("Move: left");
  if (key === 's') connection.write("Move: down");
  if (key === 'd') connection.write("Move: right");

  // Say keys
  if (key === 'q') connection.write("Say: Hello!");
  if (key === 'e') connection.write("Say: Zoom!");
  if (key === 'z') connection.write("Say: ssssssss...");
  if (key === 'x') connection.write("Say: I’m coming!");
};

module.exports = { setupInput };