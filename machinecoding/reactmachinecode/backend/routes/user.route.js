import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/users", addUser);
router.get("/users", getUser);
router.delete("/users/:_id", deleteUser);
router.put("/users/:_id", updateUser);

export default router;
