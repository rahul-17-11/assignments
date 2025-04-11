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

export const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedUser = await User.findByIdAndDelete(_id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Deleted", deletedUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(_id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Updated", updatedUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};
