import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
  connectDB();
});
