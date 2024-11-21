import UserModel from "../models/userModel.js";
import AdminModel from "../models/adminModel.js"; // Import AdminModel

export const profileUpdate = async (req, res) => {
    try {
        const userId = req.userId;
        const { userName, email } = req.body;
        if (!userId) {
            return res.status(400).json({ message: "Invalid token required" });
        }
        let updatedUser = await UserModel.findOneAndUpdate({ _id: userId, email }, { userName }, { new: true });
        if (!updatedUser) {
            updatedUser = await AdminModel.findOneAndUpdate({ _id: userId, email }, { userName }, { new: true });
        }
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
