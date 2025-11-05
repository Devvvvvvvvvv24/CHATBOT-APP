import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const User = mongoose.model("User", userSchema);

// ✅ default export
export default User;
