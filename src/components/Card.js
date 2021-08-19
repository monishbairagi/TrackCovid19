import React from 'react'
import './style.css'

export const Card = (obj) => {
    const style = {
        backgroundColor: obj.color,
    }
    return (
        <div className="card_box" style={style}>
            <h3 id="time_span"  className="fontSmall">{obj.title}</h3>
            <h1 className="fontHead">{obj.count}</h1>
        </div>
    )
}
