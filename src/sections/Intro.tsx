import React from 'react'
import Typed, { TypedOptions } from "typed.js"
// import { GlowingCard } from '../components/glowingCard/GlowingCard'

import intro from "../assets/intro.png"

const isMe = ["Irfan Zahir", "web developer", "tech enthusiast", "an adventurer"]

const typingOptions: TypedOptions = {
    strings: isMe,
    typeSpeed: 75,
    backDelay: 1000,
    backSpeed: 15,
    loop: true,
}

export const Intro = (props: any) => {

    const typedSpanRef = React.createRef<HTMLSpanElement>()
    const typedRef = React.useRef<Typed>()

    React.useEffect(() => {
        typedRef.current = new Typed(typedSpanRef.current!, typingOptions)

        return () => typedRef.current?.destroy()
    }, [])


    return (
        <>
            <div className='w-full lg:w-auto text-start font-black'>
                <h1 className='text-4xl lg:text-7xl title-font'>
                    <span>Hello there,</span><br />
                    <span>I'm </span>
                    <span className='text-primary' ref={typedSpanRef} />
                </h1>
                <h3 className='text-md lg:text-xl'>I transform creative designs into websites, and i love what i do &#129310;</h3>
            </div>
            {/* <GlowingCard width={250} height={280} /> */}
            <div className="image-container shadow-md lg:w-96 lg:h-96">
                <img src={intro} alt="I transform creative designs into websites, and i love what i do &#129310;" />
            </div>
        </>
    )
}
