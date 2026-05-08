import mongoose from "mongoose";
import userSchema from "../Schemas/UserSchema.js";

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
