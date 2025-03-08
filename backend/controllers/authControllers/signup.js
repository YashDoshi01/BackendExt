import bcrypt from "bcrypt";
import User from "../../models/user.model.js"

const signupController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(403).json({
                success: false,
                message: "This user already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, password: hashedPassword });

        res.status(200).json({
            success: true,
            message: "User signup success",
            email: newUser.email,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export default signupController;