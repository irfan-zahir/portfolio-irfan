import React from 'react'
import "./style.css"

type GlowingCardProps = { width: number; height: number; children?: React.ReactElement; backgroundColor?: string }

export const GlowingCard = ({ width, height, backgroundColor, ...props }: GlowingCardProps) => {
    return (
        <div className='glowing-card' style={{ width, height, backgroundColor }}>

        </div>
    )
}
