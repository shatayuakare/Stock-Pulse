import Products from "../model/product.schema.js";


export const getProducts = async (req, res) => {

    try {
        const products = await Products.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
export const getProduct = async (req, res) => {
    try {
        const product = await Products.findOne({ _id: req.params.id })
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const addProduct = async (req, res) => {
    const { title, description, img, price, category, quantity } = req.body;
    try {

        const product = new Products({
            title, description, img, price, quantity, category
        });

        product.save()
        res.status(201).json({
            message: "Product Added",
            product
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const updateProduct = async (req, res) => {
    const { title, description, img, price, category, quantity } = req.body;
    try {
        const product = await Products.findOneAndUpdate({ _id: req.params.id }, { title, description, img, price, category, quantity });

        // const updateData =
        res.status(200).json({
            message: "Product Update",
            product
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findOneAndDelete({ _id: req.params.id });

        res.status(200).json({
            message: "Product Deleted",
            product
        })
    } catch (error) {
        res.status(404).json(error.message)
    }
}