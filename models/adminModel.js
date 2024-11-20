import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        adminName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
