import React from 'react'
import PageHeading from '../PageHeading'

const FAQ = () => {
    return (
        <section className='flex justify-center flex-col bg-orange-50'>

            <PageHeading title={"Ask us anything"} about={"Frequently Asked Questions (FAQs)"} />

            <div className='md:w-3/4 mx-auto sm:w-full '>
                <div className="flex flex-col gap-2">
                    <div className="collapse collapse-plus bg-white rounded-sm">
                        <input type="radio" name="faq" defaultChecked />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content ">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white rounded-sm">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white rounded-sm">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button className="btn btn-ghost hover:bg-orange-500 text-zinc-600 md:w-1/5 rounded-sm border-2 my-4 border-orange-500 hover:text-white">
                        View More
                    </button>
                </div>
            </div>

        </section>
    )
}

export default FAQ