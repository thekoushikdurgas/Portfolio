import React from 'react'

export default function Sign() {
    return (
        <div className="presentation-subtitle text-center">
            <div className="stage">{[...Array(20).keys()].map((i) => { return <div className="layer" key={i}></div> })}</div>
        </div>
    )
}
