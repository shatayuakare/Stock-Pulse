import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddProduct = () => {

    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(99);
    const [quantity, setQuantity] = useState(5);

    const [loader, setLoader] = useState(false);


    const productAddHandler = async (event) => {
        event.preventDefault();
        setLoader(true)

        if (!img) { return toast.warn("Image Required") }
        if (!title) { return toast.warn("Title Required") }
        if (!price) { return toast.warn("Price Required") }
        if (!quantity) { return toast.warn("Quantity Required") }
        if (!category) { return toast.warn("Category Required") }
        if (!description) { return toast.warn("Description Required") }

        const productData = {
            img, title, description, category, price, quantity
        }

        await axios.post("http://localhost:4000/products/add", productData).then((res) => {
            // toast.success("New Product added")
            // console.log(res)
            toast.success(res.data.message)
            setLoader(false)
        }).catch((err) => toast.error(err.response.data.message))
        setLoader(false)
        setTitle("")
        setDescription("")
        setPrice("")
        setCategory("")
        setQuantity("")
        setImg("")
    }

    return (
        <dialog id="addProduct" className="modal">
            <div className="modal-box bg-white">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl font-bold">✕</button>
                </form>
                <h3 className="font-bold text-lg">Add Product</h3>


                <form action="" method='post' onSubmit={productAddHandler}>
                    <input className='input bg-zinc-100 w-full mt-4' type='url' name="img" placeholder='Product image URL...'
                        value={img}
                        onChange={(event) => setImg(event.target.value)}
                    />
                    <input className='input bg-zinc-100 w-full mt-4' type="text" name="title" placeholder='Product title...'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />


                    <div className='flex gap-4 w-full'>

                        <label className="input input-bordered flex items-center gap-1 text-nowrap mt-4 bg-zinc-100 text-zinc-600">
                            Price (₹) :
                            <input className='grow text-black w-1/2 text-xl' type="tel" name="price" placeholder='Product Price...'
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-1 text-nowrap mt-4 bg-zinc-100 text-zinc-600">
                            Quantity :
                            <input className='grow text-black h-full w-1/2' type="tel" name="quantity" placeholder='Product Quantity...'
                                value={quantity}
                                onChange={(event) => setQuantity(event.target.value)}
                            />
                        </label>
                    </div>

                    <select className="select select-bordered w-full mt-4 bg-zinc-100" name='category' value={category}
                        onChange={(event) => setCategory(event.currentTarget.value)}>
                        <option defaultValue>-- select --</option>
                        <option value={"1"}>Han Solo</option>
                        <option value={"2"}>Greedo</option>
                    </select>

                    <textarea className='textarea resize-none bg-zinc-100 w-full mt-4' name="description" rows={2} placeholder='Product Description...'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></textarea>



                    <button type='submit' className='btn btn-ghost bg-orange-500 hover:bg-orange-600 my-4 text-white'>
                        {
                            loader ?
                                <span className="loading loading-dots loading-md"></span>
                                :

                                <span>Add Product</span>
                        }
                    </button>
                </form>
            </div>
        </dialog>
    )
}

export default AddProduct