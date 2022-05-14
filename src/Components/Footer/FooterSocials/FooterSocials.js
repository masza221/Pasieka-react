import React from 'react'

export default function FooterSocials({title, rel,target,href, imgSrc, imgAlt}) {
  return (
    <div className="footer__socials">
        <a
          title={title}
          rel={rel}
          target={target}
          href={href}
          ><img loading="lazy" src={imgSrc} alt={imgAlt}
        /></a>
      </div>
  )
}
