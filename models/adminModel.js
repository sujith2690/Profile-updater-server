import mongoose from "mongoose";

const AdminSchema = mongoose.Schema(
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

const UserModel = mongoose.model("admins", AdminSchema);
export default UserModel;
