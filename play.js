const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.16",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event listener for incoming messages from server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();