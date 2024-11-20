import pkg from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";

export const signUser = async (req, res) => {
    try {
        const { email } = req.body;
        const oldUser = await UserModel.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }
        const jwt = pkg;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPass;
        const newUser = new UserModel(req.body);
        const user = await newUser.save();
        const token = jwt.sign(
            {
                username: user.username,
                id: user._id,
            },
            process.env.JWT_KEY,
            { expiresIn: "24h" }
        );
        const { password, createdAt, ...userDetails } = user._doc;
        res.status(200).json({ success: true, userDetails, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
