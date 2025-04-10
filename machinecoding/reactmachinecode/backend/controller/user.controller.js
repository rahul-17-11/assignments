import User from "../models/user.model.js";

export const addUser = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    let newUser = new User({
      firstName,
      lastName,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error });
  }
};
