import Users from "../model/user.schema.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()
const JSON_KEY = process.env.JSON_KEY;

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email })
        if (!user) return res.status(404).json({ message: "No user found" })

        const isMatch = await bcrypt.compare(password, user.password)

        if (!user || !isMatch) return res.status(400).json({ message: "Email or password is incorrect." })

        let token = jwt.sign({ email, id: user._id }, JSON_KEY)
        // req.session.user = user;
        res.cookie("token", token)
        res.status(200).json({
            message: "User Logged In",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone
            },
            token: token
        })
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message)
    }
}


export const register = async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        const user = await Users.findOne({ email });
        if (user) return res.status(200).json("User Already exist")

        const hashPassword = await bcrypt.hash(password, 10)

        const createUser = Users.create({
            name, email, phone, password: hashPassword
        })
        let token = jwt.sign({ email, id: user._id }, JSON_KEY)
        res.cookie("token", token)

        createUser.save();
        res.status(201).json({
            message: "User Created",
            user: {
                name, email, phone
            }
        })
    } catch (error) {
        res.status(400).json(error)
    }
}


export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(403).json({ message: "You have no permission, Please Login" });

        // console.log(token)
        const decode = jwt.verify(token, JSON_KEY)
        const user = await Users.findOne({ email: decode.email }).select("-password")

        req.user = user
        next()
    } catch (error) {
        res.status(404).json(error.message)
    }
}


export const updateInfo = async (req, res) => {
    const { email, phone, name } = req.body;

    try {

        // const user = await Users.findOne()
        const user = await Users.findOneAndUpdate({ email }, { phone, name }).select("-password");

        res.status(200).json({ message: "User Information Update Successfully", user })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const changePassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;
    try {
        const user = await Users.findOne({ email });
        if (!user) return res.status(403).json({ message: "Unauthorized access" })

        const auth = await bcrypt.compare(oldPassword, user.password)
        if (!auth) return res.status(403).json({ message: "Password Incorrect" })

        const hash = await bcrypt.hash(newPassword, 10);

        await Users.findOneAndUpdate({ email }, { password: hash })
        res.status(200).json({
            message: "Password Change",
            newPassword
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}
