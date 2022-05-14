import React from 'react'

export default function Info({ fade, imgSrc, imgAlt, title, content }) {
    return (
        <div className={"info " + fade}>
            <p>
                <img src={imgSrc} alt={imgAlt} /><br />
                {title} <br />
                {content}
            </p>
        </div>
    )
}
