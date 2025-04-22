import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

const app = express();

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["POST"],
    credentials: true,
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
  connectDB();
});
