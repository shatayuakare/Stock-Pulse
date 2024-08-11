// import React, { useState } from 'react'
import AddProduct from './AddProduct'

const Products = () => {
    // const [products, setProducts] = useState([])
    // const products = fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then(console.log);
    // console.log(products.products)
    return (
        <div className='h-full w-full gap-2'>

            <div className="navbar bg-white rounded-md p-4">
                <div className="navbar-start gap-2">

                    <div className='inline-flex items-center bg-zinc-200 rounded-md p-2 pe-0'>
                        Show:
                        <select className="select w-full bg-transparent select-sm border-none text-black font-bold" defaultValue={"sdh"}>
                            <option>All Products</option>
                            <option value={"electronic"}>Electronic</option>
                            <option value={"electric"}>Electric</option>
                            <option value={"man"} >Man Fashion</option>
                            <option value={"women"}>Woman Fashion</option>
                            <option value='other'>other</option>
                        </select>
                    </div>
                    <div className='inline-flex items-center bg-zinc-200 rounded-md p-2 pe-0 text-nowrap'>
                        Sort By:
                        <select className="select w-full bg-transparent select-sm border-none after:p-0 text-black font-bold" defaultValue={"sdh"}>
                            <option>Default</option>

                        </select>
                    </div>
                    <div className='inline-flex items-center bg-zinc-200 rounded-md p-2 pe-0 text-nowrap'>
                        Price:
                        <select className="select w-full bg-transparent select-sm border-none after:p-0 text-black font-bold" defaultValue={"sdh"}>
                            <option>0 - 99</option>
                            <option>100 - 299</option>
                            <option>300 - 499</option>
                        </select>
                    </div>

                </div>

                <div className="navbar-center md:flex sm:hidden">
                    <label className="input w-full input-bordered flex items-center gap-2 bg-zinc-200 pe-1">
                        <input type="text" className="grow" placeholder="Search" />
                        <button className="btn btn-ghost btn-sm px-1">
                            <i className='bx bx-search-alt text-xl' ></i>
                        </button>
                    </label>
                </div>

                <div className="navbar-end  text-end gap-2 ms-auto">
                    <button className="btn btn-ghost btn-sm bg-orange-400 hover:bg-orange-500 text-white rounded-md font-bold h-auto px-2 p-1"
                        onClick={() => document.getElementById('addProduct').showModal()}>
                        <i className='bx bx-plus text-2xl font-extrabold'></i> Add Product
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table text-center bg-white mt-3 rounded-sm">
                    {/* head */}
                    <thead className='text-zinc-500'>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className='text-zinc-500'>
                                1
                            </th>
                            <td className='text-start'>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Keyboard Wireless Chicklet Key
                                        </div>
                                        <div className="text-sm opacity-50">
                                            Category
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='text-wrap text-start'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, laborum! Lorem ipsum dolor sit amet.
                            </td>
                            <td>
                                5
                            </td>
                            <td className='text-2xl font-bold text-green-700'>
                                ₹99/-
                            </td>
                            <td>
                                <button className="btn btn-ghost hover:bg-transparent hover:text-green-500 btn-xs p-0">Edit</button>/
                                <button className="btn  p-0 btn-ghost hover:bg-transparent hover:text-red-500 btn-xs">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <AddProduct />
        </div>
    )
}

export default Products