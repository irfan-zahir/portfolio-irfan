import React from 'react'
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud"

export const Knowledges = () => {

    const texts = [
        "ChakraUI", "Node.JS", "React.JS", "TailwindCSS", "Android Studio", "Boostrap", "SQL", "REST API",
        "Firebase", "GCP", "Heroku", "MongoDB", "Dart", "PHP", "TypeScript", "NextJS", "git", "jQuery",
        "Flutter", "React Native",
    ];

    const skills = [
        {
            name: "Next.JS",
            image: "https://camo.githubusercontent.com/f21f1fa29dfe5e1d0772b0efe2f43eca2f6dc14f2fede8d9cbef4a3a8210c91d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67",
            progress: "intermediate"
        },
        {
            name: "TypeScript",
            image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
            progress: "moderate"
        },
        {
            name: "PHP",
            image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png",
            progress: "intermediate"
        },
        {
            name: "Flutter",
            image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flutter/flutter.png",
            progress: "beginner"
        },
    ]

    const [radius, setRadius] = React.useState<number | null>(null)
    const tagCloudOptions: TagCloudOptions = { initSpeed: "normal", maxSpeed: 'normal', }

    const containerRef = React.createRef<HTMLDivElement>()


    React.useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.clientWidth / 2
            setRadius(width < 400 ? width : 400)
        }

        return () => {

        }
    }, [containerRef.current])

    const getProgress = (progress: string) => {
        switch (progress) {
            case "beginner": return 3
            case "moderate": return 5
            case "intermediate": return 7
            case "professional": return 8
            case "expert": return 9
        }
    }


    return (
        <>

            <h1 className='fancy-font text-primary text-xl lg:text-4xl mb-8 lg:mb-10'>things i know</h1>

            <div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
                <div ref={containerRef} id="tag-cloud-container" className=' lg:w-full lg:flex lg:justify-center my-8'>
                    {
                        radius &&
                        <TagCloud
                            className='text-primary title-font text-xs lg:text-xl font-bold'
                            options={{ radius, ...tagCloudOptions }}>
                            {texts}
                        </TagCloud>
                    }
                </div>
                <div className='flex flex-col gap-10 lg:justify-center'>
                    <span className='text-justify lg:text-xl'>
                        I was exposed into modern frameworks and got tonnes of valuable info during my internship.
                        After exploring different JS frameworks (e,g: React.JS, Next.JS, Flutter),
                        I dived into server side related technologies (e,g: GCP, MongoDB, Heroku) .
                        It is always intresting to see how fast technologies have evolved during these past decades.
                    </span>
                    <div className="grid grid-rows-1 gap-4">
                        {
                            skills.map((skill, i) => (
                                <div key={i} className="card card-side skill-container gap-8 p-2 shadow-md">

                                    <figure><img className='lg:w-24 w-16' src={skill.image} alt="Movie" /></figure>
                                    <div className="card-body gap-0 p-0">
                                        <h2 className="card-title title-font font-bold text-lg text-primary">{skill.name}</h2>
                                        <p className='text-sm mb-5 capitalize'>{skill.progress}</p>
                                        <progress
                                            className="progress progress-info w-full"
                                            value={getProgress(skill.progress)} max="10" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
