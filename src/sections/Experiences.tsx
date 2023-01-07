import React from 'react'
import useCarousel, { EmblaEventType, EmblaOptionsType } from "embla-carousel-react"
import Classnames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"

export const Experiences = () => {
    const carouselSlideData = [
        {
            company: "Zionext (Malaysia) Sdn Bhd",
            title: "Front End SDE",
            timeline: "April 2022 - present",
            content: [
                "Working closely with other team members in an agile environment on creating web application using NextJS (Typescript) as front end frameworks.Transforms designs and wireframes ",
                "Transforms designs and wireframes into precise React component with high standards and quality readable codes that are well documented and easy to use in future."
            ]
        },
        {
            company: "Runchit",
            title: "Fullstack Developer",
            timeline: "January 2023",
            content: [
                "Work in progress React Native project on creating inventory system to help mini market store their stocks records on the cloud.",
                "Enable shops to scan and record stocks from their hand through mobile phone and help store manager to keep track their monthly performance on-the-go."
            ]
        },
        {
            company: "Zam's Highway Transport",
            title: "Fullstack Developer",
            timeline: "March 2022",
            content: [
                "A freelance project on creating a responsive modern web application with multi level users access that manage and organize workflows and records.",
                "Transformed requirements into system, simplified redundants workflows and increased the security of the system.",
                "Work using cutting edge technologies, frameworks and platforms such as React.js, Firebase and Chakra UI.",
            ]
        },
        {
            company: "Portal eBencana Kelantan",
            title: "Front End Developer",
            timeline: "February 2022",
            content: [
                "A continued project, transforming a portal website that display disasters related reports into modern and graphical website.",
                "Simplifying complex data stored in table type database - MySQL into graphical data using PHP PDO to fetch data and Chart.js to display in chart form."
            ]
        },
        {
            company: "eBencana Kelantan",
            title: "Fullstack Developer",
            timeline: "November 2021",
            content: [
                "A freelance project on creating a multilevel user authorization administration system.",
                "Contributed extensively to one of many modules that have all CRUD operations for the configurations values of the system.",
                "Helped solidify the configurations modules that stores important values that will be used in the system in all other modules.",
            ]
        },
        {
            company: "Paytern Sdn Bhd",
            title: "System Analyst Programmer",
            timeline: "January - July 2021",
            content: [
                "An internship programme with Paytern Sdn. Bhd.",
                "Helped to build an administration system using PHP Laravel and decreased the delivery time exponentially with the guidance of successful seniors.",
            ]
        },
    ]

    const autoPlayOptions = { delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false }

    const carouselOptions: EmblaOptionsType = { loop: true }
    const [carouselRef, carouselApi] = useCarousel(carouselOptions, [Classnames(), Autoplay(autoPlayOptions)])

    const navigatorOptions: EmblaOptionsType = { loop: false, draggable: true, dragFree: true, startIndex: 0 }
    const [navigatorRef, navigatorApi] = useCarousel(navigatorOptions, [Classnames({
        active: true,
        selected: ""
    })])

    const onContentSettle = (ev: EmblaEventType) => {
        const index = carouselApi?.selectedScrollSnap()
        if (index || index === 0) {
            navigatorApi?.scrollTo(index)
            const slide = navigatorApi?.slideNodes()
            const selected = slide![index]
            selected.classList.add("active")

            navigatorApi?.slideNodes()!.forEach((nav, i) => i !== index && nav.classList.remove("active"))
        }

    }

    const onNavigatorClick = (selected: number) => carouselApi?.scrollTo(selected, false)

    carouselApi?.on("select", onContentSettle)

    return (
        <>
            <h1 className='fancy-font text-primary text-xl lg:text-4xl mb-8 lg:mb-14 lg:mt-24'>my works and experiences</h1>

            <div className='lg:w-1/2 lg:flex lg:flex-col lg:self-center lg:my-24'>

                <div ref={navigatorRef} className="embla mb-4" id='job-navigator'>
                    <div className="embla__container gap-3">
                        {
                            carouselSlideData.map((job, i) => (
                                <button
                                    key={i}
                                    onClick={() => onNavigatorClick(i)}
                                    className={`lg:text-2xl lg:px-8 lg:py:4 shadow-lg title-font navigator__button rounded-full px-2 py-1 ${i === 0 && "active"}`}
                                >
                                    {job.company}
                                </button>
                            ))
                        }
                    </div>
                </div>

                <div ref={carouselRef} className="embla" id='job-content'>
                    <div className="embla__container gap-3">
                        {
                            carouselSlideData.map((job, i) => {
                                return (
                                    <div id={`job-${i}`} className="embla__slide w-full rounded-box shadow-lg" key={i}>
                                        <div className=' p-4 flex flex-col flex-wrap'>
                                            <div className="content-header mb-3 text-primary">
                                                <h1 className='title-font font-bold text-xl lg:text-3xl'>{job.title}</h1>
                                                <h1 className='title-font text-sm lg:text-xl'>{job.timeline}</h1>
                                            </div>
                                            <ul className='flex flex-wrap lg:gap-4 flex-col content-desc lg:text-xl'>
                                                {job.content.map((cont, j) => <li className='text-justify' key={j}>{cont}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
