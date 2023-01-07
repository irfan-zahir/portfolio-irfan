import React from 'react'
import styled from "@emotion/styled"
import resume from "../assets/Resume2023.pdf"

interface FooterScrollerProps {
    height: number
}

export const Contact = () => {

    const FooterScroller = styled("div")<FooterScrollerProps>((props) => ({ height: props.height, backgroundColor: "var(--bg)" }))

    const Footer = styled("div")<FooterScrollerProps>(props => ({
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
    }))

    return (
        <>
            <div className='footer-scroller' />
            <div className='footer-content bg-primary p-8'>
                <h1 className='fancy-font text-xl lg:text-3xl'>get in touch</h1>
                <div className=' lg:flex lg:justify-center lg:gap-24  mt-8 mb-4'>
                    <div className='section-left flex flex-col flex-1 mb-2'>

                        <div className="flex flex-col mb-4">
                            <h1 className='title-font mb-2 lg:text-xl'>Business enquiry</h1>
                            <form action="" className='flex flex-col gap-2 title-font'>

                                <div className="form-control w-full">
                                    <input type="text" placeholder="Name" className="input input-bordered w-full bg-card" />
                                </div>
                                <div className="form-control w-full">
                                    <input type="text" placeholder="Name" className="input input-bordered w-full bg-card" />
                                </div>
                                <div className="form-control w-full">
                                    <textarea className="textarea outline-0 textarea-bordered w-full bg-card" placeholder="Message"></textarea>
                                </div>

                                <button className='btn btn-sm bg-success border-none shadow shadow-bg text-white'>Submit</button>
                            </form>
                        </div>

                    </div>
                    <div className='section-right flex flex-col flex-1'>
                        <h1 className='title-font mb-2 lg:text-xl'>Social platform</h1>
                        <div className="flex gap-4 mb-4">
                            <a target="_blank" href='https://t.me/irfanzahir' className='shadow shadow-bg rounded-md pointer w-10 h-10 p-1.5'>
                                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/telegram/telegram.png" alt="Telegram" />
                            </a>
                            <a target="_blank" href='https://twitter.com/_irfanzahir' className='shadow shadow-bg rounded-md pointer w-10 h-10'>
                                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/twitter/twitter.png" alt="Twitter" />
                            </a>
                            <a target="_blank" href='https://github.com/irfan-zahir' className='shadow shadow-bg rounded-md p-1 pointer w-10 h-10'>
                                <img src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" alt="Discord" />
                            </a>
                            <a target="_blank" href='https://discordapp.com/users/616791602702057483' className='shadow shadow-bg rounded-md p-1 pointer w-10 h-10'>
                                <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/discord/discord.png" alt="Discord" />
                            </a>
                        </div>

                        <h1 className='title-font my-2 lg:text-xl'>Resources</h1>
                        <a target={"_blank"} href={resume} className='w-fit btn btn-sm border bg-primary border-card px-5 text-white'>Resume</a>
                    </div>
                </div>

                <div id="signature" className='flex gap-4 justify-between lg:justify-start lg:fixed lg:bottom-10'>
                    <span className="text-xs lg:text-md">
                        by Irfan Zahir
                    </span>
                    <span className="text-xs lg:text-md">
                        ReactJS and DaisyUI TailwindCSS
                    </span>
                </div>
            </div>
        </>
    )
}
