import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaYoutube } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    }
]
const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className="py-4 px-4">
                        <a href="#" className='text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl'>
                            &lt;EShop&#47;&gt;
                        </a>
                        <p className='text-gray-600 lg:pr-24 pt-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, magni culpa repudiandae nihil eius possimus sit.</p>
                        <p className='text-gray-500 mt-4'>Thank you for visiting</p>
                    </div>
                    <div className="col-span-1 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="pb-8 px-4">
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 hover:text-black hover:dark:text-white duration-300'>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Second column links */}
                        <div className="pb-8 px-4">
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 hover:text-black hover:dark:text-white duration-300'>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Company address */}
                    <div className="py-8px-4 col-span-1 sm:col-auto">
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Pulchowk,Lalitpur</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>9800000000</p>
                            </div>
                            {/* Social Links */}
                            <div className='flex items-center gap-3 mt-6 '>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primary duration:300' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primary duration:300' />
                                </a>
                                <a href="#">
                                    <FaYoutube className='text-3xl hover:text-primary duration:300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

