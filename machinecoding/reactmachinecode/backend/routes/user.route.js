import express from "express";
import { addUser, getUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/users", addUser);
router.get("/users", getUser);
router.get("/", (req, res) => res.send("Welcome to home route!!"));

export default router;
