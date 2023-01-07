import { EmblaOptionsType } from 'embla-carousel-react'
import React from 'react'
import resume from "../assets/Resume2023.pdf"
import GalleryCarousel from './GalleryCarousel'


export const AboutMe = () => {

    const OPTIONS: EmblaOptionsType = { inViewThreshold: 0, dragFree: false, loop: true }
    const SLIDE_COUNT = 6
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <h1 className='fancy-font text-primary text-xl lg:text-4xl mb-8 lg:mb-10'>my background</h1>
            <div className='lg:grid lg:grid-cols-2 lg:gap-x-32'>
                <div className="grid-item lg:text-xl lg:flex lg:flex-col lg:justify-between">
                    <div className='text-justify'>
                        Hello! My name is Irfan and I enjoy exploring new technologies and frameworks.
                        I also enjoy creating digital innovations specifically websites and mobile apps.
                        <div className='hidden lg:block'>
                            Sometime, i follow hiking trips
                            and find magnificent waterfalls along with my friends to get a break from works and enjoying nature.
                        </div>
                    </div>
                    <div id='biography' className="hidden lg:block">
                        <div className="grid grid-cols-2 gap-y-2">
                            <span>Name</span>
                            <span>Muhammad Zahirul Irfan</span>

                            <span>Birthday (Age)</span>
                            <span>15 September 1998 (25)</span>

                            <span>Based</span>
                            <span>Skudai, Johor Bahru</span>
                        </div>
                    </div>
                    <a target={"_blank"} href={resume} className='w-full hidden lg:inline-flex mt-3 btn btn-sm border bg-primary border-card px-5 text-white'>
                        My Resume
                    </a>
                </div>
                <div className="grid-item my-8 lg:m-0">
                    <GalleryCarousel slides={SLIDES} options={OPTIONS} />
                </div>
                <div className='text-justify lg:hidden'>
                    Sometime, i follow hiking trips
                    and find magnificent waterfalls along with my friends to get a break from works and enjoying nature.
                </div>
                <a target={"_blank"} href={resume} className='w-full lg:hidden mt-3 btn btn-sm border bg-primary border-card px-5 text-white'>
                    My Resume
                </a>
            </div>
        </>
    )
}
