import React from 'react'
import PageHeading from '../PageHeading'


const team = [
    {
        name: "Shatayu Akare",
        profession: "Software Engineer",
        img: "https://validthemes.net/site-template/techa/assets/img/team/1.jpg",
        social: [
            {
                icon: "bx bxl-facebook",
                url: "https://www.facebook.com",
                color: "bg-blue-800 text-white"
            },
            {
                icon: "bx bxl-instagram",
                url: "https://www.instagram.com",
                color: "text-orange-600 bg-white"
            },
            {
                icon: "bx bxl-twitter",
                url: "https://www.twitter.com",
                color: "bg-blue-500 text-white"
            },
        ]
    },
    {
        name: "Navin Rajput",
        profession: "Cyber Expert",
        img: "https://validthemes.net/site-template/techa/assets/img/team/3.jpg",
        social: [
            {
                icon: "bx bxl-facebook",
                url: "https://www.facebook.com",
                color: "bg-blue-800 text-white"
            },
            {
                icon: "bx bxl-instagram",
                url: "https://www.instagram.com",
                color: "text-orange-600 bg-white"
            },
            {
                icon: "bx bxl-twitter",
                url: "https://www.twitter.com",
                color: "bg-blue-500 text-white"
            },
        ]
    },
    {
        name: "Adhom Jonam",
        profession: "Project Manageer",
        img: "https://validthemes.net/site-template/techa/assets/img/team/6.jpg",
        social: [
            {
                icon: "bx bxl-facebook",
                url: "https://www.facebook.com",
                color: "bg-blue-800 text-white"
            },
            {
                icon: "bx bxl-instagram",
                url: "https://www.instagram.com",
                color: "text-orange-600 bg-white"
            },
            {
                icon: "bx bxl-twitter",
                url: "https://www.twitter.com",
                color: "bg-blue-500 text-white"
            },
        ]
    },
]

const Team = () => {
    return (
        <>
            <section className='flex justify-center flex-col bg-white' id='team'>
                <PageHeading title="expert team" about="meet our leadership" />

                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:mx-3 md:w-2/3 md:mx-auto p-4">

                    {
                        team.map((elem, index) => {
                            return (
                                <div className="card" key={index}>
                                    <div className='m-0 p-2'>
                                        <figure className='md:h-80 w-full rounded-md flex-col'>
                                            <img className='w-full'
                                                src={elem.img}
                                                alt={elem.name} />
                                        </figure>
                                        <div className='relative'>
                                            <div className='bg-white rounded-lg float-end me-8 -mt-5 border-2 border-white rotate-45  w-12 h-12 flex justify-center items-center'>

                                                <div className="dropdown dropdown-top dropdown-hover hover:-rotate-45">
                                                    <button tabIndex={0} role="button">
                                                        <i className='bx bx-plus text-2xl -rotate-45 font-extrabold text-blue-500'></i>
                                                    </button>
                                                    <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] gap-2 w-fit -ms-3 pb-4">

                                                        {
                                                            elem.social.map((ele, idx) => <li className='w-10 h-10 text-2xl font-bold' key={idx}>
                                                                <a className='p-0' href={ele.url} target="_blank" rel="noopener noreferrer">
                                                                    <i className={`${ele.icon} ${ele.color} p-2 rounded-full`}></i>
                                                                </a>
                                                            </li>)
                                                        }

                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body text-center p-0 text-orange-500 text-lg gap-0 font-bold">
                                        <div className="card-title text-black mx-auto p-0 text-2xl">
                                            {elem.name}
                                        </div>
                                        {elem.profession}
                                    </div>
                                </div>
                            )
                        })
                    }




                </div>
            </section >
        </>
    )
}

export default Team