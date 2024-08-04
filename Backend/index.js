import express, { urlencoded } from "express";
import dotenv from "dotenv"
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import supplierRoute from "./routes/supplier.route.js";
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { isLoggedIn } from "./controller/user.controller.js";


// Application Server setup
const server = express();
dotenv.config()

// middleware
server.use(cors())
server.use(cookieParser())
server.use(express.json())
server.use(urlencoded({ extended: false }))

// Application environmnet variable
const port = process.env.PORT || 5000
const database = process.env.MONGODBURI;

// Applicatino Routes
server.get("/", (req, res) => {
    res.send("Hello Dosto");
})

// Database connection
server.listen(4000, () => {
    console.log(`server working on ${port} port`)
    mongoose.connect(database).then(() =>
        console.log("Database Connecting Successfully.")
    ).catch((err) => console.log("Error:", err.message))

})

// Application middleware Routes
server.use("/products", productRoute)
server.use("/auth", userRoute)
server.use("/suppliers", isLoggedIn, supplierRoute)