const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')

const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");
const authMiddleware = require ('../auth/authenticator')

const server = express();
dotenv.config();

server.use(express.json());
server.use(cors());

server.use("/api/users", authMiddleware, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
