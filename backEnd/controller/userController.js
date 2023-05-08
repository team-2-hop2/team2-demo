const UserModel = require("../model/userModel")
const SECRET_KEY = 'itssecretkey'
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

exports.createUser = async (req, res) => {
    try {
        const { password, email } = req.body
        const existingUser = await UserModel.findOne({ email: email })
        if (existingUser) {
            return res.status(409).json({ message: "burtgeltei hereglegc bn" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const createUser = await UserModel.create({
            email: email,
            password: hashedPassword,
        })
        const token = jwt.sign({ email: createUser.email, id: createUser._id }, SECRET_KEY)
        
        res.status(200).json({
            message: 'created',
            data: createUser,
            token: token
        })
    } catch (error) {
        return res.status(500).json({ message: error, data: null });

    }
}

exports.login = async (req, res,) => {
    try {
        const { password, email } = req.body
        const existingEmail = await UserModel.findOne({ email: email })
        if (!existingEmail) {
            return res.status(409).json({ success: false, message: "burtgelgui hereglegc bn" })
        }
        const isValid = await bcrypt.compare(password, existingEmail.password)
        if (!isValid) {
            return res.status(409).json({ success: false, message: "nuuts ug buruu bn" })
        }
        const token = jwt.sign({ email: existingEmail.email, id: existingEmail._id }, SECRET_KEY)
        res.status(200).json({
            success: true,
            data: existingEmail,
            token: token,
        })
    } catch (error) {
        return res.status(500).json({ message: error, data: null });
    }
}
