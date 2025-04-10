import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
  connectDB();
});
