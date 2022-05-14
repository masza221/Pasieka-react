import "./footer.css";
import FooterSocials from "./FooterSocials/FooterSocials";

export default function Footer() {




  return (
    <footer className="footer showSocials">
      <div className="iko">

        <FooterSocials
          title="facebook"
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/krystian.kobel.1"
          imgSrc="obrazy/fb.svg"
          imgAlt="facebook"
        />
        <FooterSocials
          title="instagram"
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/krystian.sw"
          imgSrc="obrazy/ig.svg"
          imgAlt="instagram"
        />
        <FooterSocials
          title="youtube"
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/channel/UCGnLmj07AJbwlcP6clSqPsA"
          imgSrc="obrazy/yt.svg"
          imgAlt="youtube"
        />

      </div>
      <div className="info-tekst">
        <p>Żurawnica 194</p>
        <br />
        <p>+48 666 058 085</p>
        <br /><br />
        <p>Pasieka Kobla | © COPYRIGHT</p>
      </div>
    </footer>
  )
}
