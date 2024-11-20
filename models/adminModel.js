import mongoose from "mongoose";

const AdminSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        role: {
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

const AdminModel = mongoose.model("admins", AdminSchema);
export default AdminModel;
