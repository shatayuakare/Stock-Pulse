import Suppliers from "../model/supplier.schema.js"


export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Suppliers.find();

        res.status(200).json(suppliers)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const getSupplier = async (req, res) => {
    try {
        const supplier = await Suppliers.findOne({ _id: req.params.id })

        res.status(200).json(supplier)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const addSupplier = async (req, res) => {
    try {
        const { about, location } = req.body;
        const supplier = await Suppliers.findOne({ email });
        if (supplier) return res.status(200).json({ message: "Supplier already exist" })

        const supplierCreate = new Suppliers({
            about, location
        })

        supplierCreate.save();
        res.status(201).json({ message: "Supplier Created", supplierCreate })
    } catch (error) {
        res.status(400).json(error.message)
    }
}
export const updateSupplier = async (req, res) => {
    const { about, location } = req.body;
    try {
        const supplier = await Suppliers.findOneAndUpdate({ _id: req.params.id }, { about, location })

        res.status(200).json({ message: "Supplier Update", supplier })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const deleteSupplier = async (req, res) => {
    try {
        const supplier = await Suppliers.findOneAndDelete({ _id: req.params.id });

        res.status(200).json({ message: "Supplier Deleted", supplier })
    } catch (error) {
        res.status(404).json(error.message)
    }
}