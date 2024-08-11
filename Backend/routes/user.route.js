import express from "express";
import { changePassword, isLoggedIn, login, register, updateInfo } from "../controller/user.controller.js";
const userRoute = express.Router();
// userRoute.use(cookieParser())

userRoute.get("/", isLoggedIn, (req, res) => res.status(200).json("Welcome to Stock Pulse"))

userRoute.post("/update", updateInfo)
userRoute.post("/login", login)
userRoute.post("/register", register)
userRoute.post("/change", changePassword)
export default userRoute