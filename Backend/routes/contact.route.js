import express from "express";
import { isLoggedIn } from "../controller/user.controller.js";
import { addContact, getContact, getContacts } from "../controller/contact.controller.js";

const contactRoute = express.Router();


contactRoute.get("/", isLoggedIn, getContacts)
contactRoute.get("/:id", isLoggedIn, getContact)

contactRoute.post("/add", addContact)

export default contactRoute