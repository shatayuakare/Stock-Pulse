import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    profilePic: {
        type: String,
        default: ""
    },
    coverPic: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    },
    cart: {
        type: Array,
        default: []
    },
    order: {
        type: Array,
        default: 0
    },
    follower: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    products: {
        type: Array,
        default: []
    },
    suppliers: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const Users = mongoose.model("users", userSchema);

export default Users