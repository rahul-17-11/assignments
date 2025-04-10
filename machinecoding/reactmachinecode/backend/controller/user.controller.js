import User from "../models/user.model.js";

export const addUser = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    await User.create({
      firstName,
      lastName,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
