const User = require("../models/User");
const History = require("../models/History");

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

// Add new user
exports.addUser = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const existing = await User.findOne({ name: { $regex: `^${name}$`, $options: 'i' } });
  if (existing) return res.status(400).json({ error: "User with this name already exists" });

  const newUser = new User({ name, totalPoints: 0 });
  await newUser.save();
  res.status(201).json(newUser);
};

// Claim random points
exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.totalPoints += points;
  await user.save();

  const history = new History({ user: userId, points }); // ✅ fixed key from "userId" → "user"
  await history.save();

  res.json({ user, points });
};

// Get all history with user name populated
exports.getHistory = async (req, res) => {
  const history = await History.find()
    .populate("user", "name") // ✅ populate "user", not "userId"
    .sort({ createdAt: -1 });  // ✅ recent first
  res.json(history);
};
