const { PeerServer } = require("peer");
const express = require("express");
const app = express();
const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: "/",
});

app.use("/peerjs", peerServer);
