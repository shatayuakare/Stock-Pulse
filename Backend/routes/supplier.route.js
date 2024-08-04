import express from "express";
import { addSupplier, deleteSupplier, getSupplier, getSuppliers, updateSupplier } from "../controller/supplier.controller.js";

const supplierRoute = express.Router();

supplierRoute.get("/", getSuppliers)
supplierRoute.get("/:id", getSupplier)
supplierRoute.get("/drop/:id", deleteSupplier)

supplierRoute.post("/update/:id", updateSupplier)
supplierRoute.post("/add", addSupplier)

export default supplierRoute