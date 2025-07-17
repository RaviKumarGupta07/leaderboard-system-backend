const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // ✅ field name is user
    points: Number,
  },
  { timestamps: true } // ✅ enables createdAt
);

module.exports = mongoose.model("History", historySchema);
