import express from "express";
import { getProduct, getProducts, addProduct, deleteProduct, updateProduct } from "../controller/product.controller.js";
import { isLoggedIn } from "../controller/user.controller.js";

const productRoute = express.Router();

productRoute.get("/", getProducts);
productRoute.get("/:id", getProduct);
productRoute.get("/drop/:id", isLoggedIn, deleteProduct);

productRoute.post("/add", isLoggedIn, addProduct)
productRoute.post("/update/:id", isLoggedIn, updateProduct)


export default productRoute