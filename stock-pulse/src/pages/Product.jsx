import React from 'react'

const Product = () => {
    return (
        <section>
            Products



            <div className="grid grid-cols-4 gap-4">
                <div className="card">
                    <figure>
                        <img className='w-full h-full' src="" alt="" />
                    </figure>

                    <div className="card-body">
                        <div className="card-title">
                            Card title
                        </div>
                        <div className="text-xl font-bold">
                            Price : $55/-
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product