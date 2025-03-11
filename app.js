import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Poll server is online");
});

export { app, port };
