import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

//importroutes
import userRoutes from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(3000, () => console.log("server is running on port 3000"));
    console.log("connected to Mongodb!");
  })
  .catch((err) => {
    console.log(err);
  });

//Routes
app.use("/api/user", userRoutes);

app.use("/api/auth", authRouter);
