import mongoose from "mongoose";

const supplierSchema = mongoose.Schema({
    about: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})


const Suppliers = mongoose.model('suppliers', supplierSchema)

export default Suppliers
