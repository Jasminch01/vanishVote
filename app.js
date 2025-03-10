import express from "express";
import env from "dotenv";
const app = express();
env.config();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Poll server is online");
});

export { app, port };
