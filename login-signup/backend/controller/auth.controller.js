import argon2 from "argon2";
import User from "../models/userSchema.js";

export const signupController = async (req, res) => {
  const { userName, userEmail, password } = req.body;
  try {
    if (!userName || !userEmail || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: " must be atleast 6 chars" });
    }
    const user = await User.findOne({ userEmail });
    if (user) {
      return res.status(400).json({ message: "Email already exist" });
    }
    const hashedpass = await argon2.hash(password);
    const userData = new User({
      userName,
      userEmail,
      password: hashedpass,
    });
    await userData.save();
    res.status(201).json(userData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" + error });
  }
};

export const loginController = async (req, res) => {
  const { userEmail, password } = req.body;
  try {
    if (!userEmail || !password) {
      return res.status(400).json({ message: "All flieds are required" });
    }
    const user = await User.findOne({ userEmail });
    if (!user) return res.status(400).json({ message: "Email not found" });
    if (await argon2.verify(user.password, password)) {
      return res.status(200).json(user);
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {}
};
