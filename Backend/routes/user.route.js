import express from "express";
import { changePassword, isLoggedIn, login, register } from "../controller/user.controller.js";
import cookieParser from "cookie-parser";

const userRoute = express.Router();

userRoute.use(cookieParser())

userRoute.get("/", isLoggedIn, (req, res) => res.status(200).json("Welcome to User Route"))

userRoute.post("/login", login)
userRoute.post("/register", register)
userRoute.post("/change", changePassword)
export default userRoute