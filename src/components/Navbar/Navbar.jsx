import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';
const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 1,
        name: "Shop",
        link: "/#shop",
    },
    {
        id: 1,
        name: "About",
        link: "/#about",
    },
    {
        id: 1,
        name: "Blogs",
        link: "/#blog",
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },
]

const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className="py-4">
                <div className="container flex justify-between">
                    <div className='flex items-center gap-4'>
                        {/* logo */}
                        <a href="#" className='text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl'>
                            &lt;EShop&#47;&gt;
                        </a>
                        <div className='hidden lg:block'>
                            {/* links section */}
                            <ul className='flex items-center gap-4'>
                                {MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>{data.name}</a>
                                    </li>
                                ))}
                                {/* Dropdown Links */}
                                <li className='relative cursor-pointer group'>
                                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>Quick links
                                        <FaCaretDown className='group-hover:rotate-180 duration-300' /></a>
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                        <ul>
                                            {
                                                DropdownLinks.map((data, index) => (
                                                    <li key={index}>
                                                        <a className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                                                            href={data.link}>{data.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Search bar Section */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='search' className='search-bar' />
                            <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400 group-hover:text-pretty absolute top-1/2 -translate-y-1/2 right-3 duration-200' />
                        </div>
                        {/*cart section */}
                        <button className='relative p-3' onClick={handleOrderPopup}>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                        </button>
                        {/* Darkmode section */}
                        <div>
                            <DarkMode />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
