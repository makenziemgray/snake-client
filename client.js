const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event listener for incoming messages from server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Handle successful connection
  conn.on("connect", () => {
  conn.write('Name: MGY');
  console.log("Successfully connected to the game server!");

});

  return conn;
};

module.exports = { connect }; 

