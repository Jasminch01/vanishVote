import mongoose from "mongoose";
import { app, port } from "./app.js";

try {
  mongoose.connect(process.env.DB_URI);
  console.log('mongodb connected successfull')
  app.listen(port, () => {
    console.log("pool app is running", port);
  });
} catch (error) {
    console.log(error)
}

