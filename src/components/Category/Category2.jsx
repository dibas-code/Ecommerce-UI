import React from 'react'
import Image1 from "../../assets/category/gaming.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/speaker.png"
import Button from '../Shared/Button'

const Category2 = () => {
    return (
        <div className='py-8'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* first */}
                    <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-600 to-gray-100 text-white rounded-3xl relative h-320px flex items-end lg:pr-20">
                        <div>
                            <div className="space-y-2 mb-4">
                                <p className='text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold'>With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-100">Console</p>
                                <Button
                                    text="browse" bgColor="bg-primary" textColor="text-white" />

                            </div>

                        </div>
                        <img src={Image1} alt="" className='sm:w-[300px] w-[200px] absolute top-1/2 -translate-y-1/2 right-0 lg:right-24' />
                    </div>
                    {/* Second */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-320px flex items-start">
                        <div>
                            <div className="mb-4">
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Oculus</p>
                                <Button
                                    text="browse" bgColor="bg-primary" textColor="text-white" />

                            </div>

                        </div>
                        <img src={Image2} alt="" className='w-[200px] absolute bottom-0 right-0' />
                    </div>
                    {/*Third */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-320px flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-80 mb-2">Speakers</p>
                                <Button
                                    text="browse" bgColor="bg-white" textColor="text-primary" />

                            </div>

                        </div>
                        <img src={Image3} alt="" className='w-[200px] absolute bottom-0 right-0' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Category2

