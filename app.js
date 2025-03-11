import express from "express";
import dotenv from "dotenv";
import path from "path";
const app = express();
dotenv.config({ path: path.join(process.cwd(), ".env") });
const port = 5000;

app.get("/", (req, res) => {
  res.send("Poll server is online");
});

export { app, port };
