// import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProduct = async () => {

            setProducts([fetch("http://localhost:4000/products")])
            // fetch("http://localhost:4000/products").then((res) => {
            //     console.log("res", res)
            //     console.log("res sj", res.data)
            //     setProducts(res.data)
            // })
            console.log()
        }

        getProduct()
    }, [])

    console.log(products)
    return (
        <section>
            Products

            <div className="grid grid-cols-4 gap-4">

                {
                    products.map((elem) => {
                        <div className="card" key={elem._id}>
                            <figure>
                                <img className='w-full h-full' src={elem.img} alt="" />
                            </figure>
                            sdfjkbdsfkjb
                            <div className="card-body">
                                <div className="card-title">
                                    {elem.title}
                                </div>
                                <div className="text-xl font-bold">
                                    Price : ${elem.price}/-
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </section>
    )
}

export default Product