import express from "express";
import { isLoggedIn, login, register } from "../controller/user.controller.js";

const userRoute = express.Router();

userRoute.get("/", isLoggedIn, (req, res) => res.status(200).json("Welcome to User Route"))
userRoute.post("/login", login)
userRoute.post("/register", register)
export default userRoute