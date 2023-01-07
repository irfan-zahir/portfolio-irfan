import React from 'react'

export const PageScroller: React.FC<React.PropsWithChildren> = ({ children, ...props }) => {

    const mainRef = React.createRef<HTMLElement>()
    const contentLength = React.Children.count(children)
    let height = 100 * contentLength;

    const [scrollPos, setScrollPos] = React.useState(0)

    const handleScroll = () => {

        const position = window.pageYOffset;
        setScrollPos(position);
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <main className='block'>
            {children}
        </main>
    )
}
