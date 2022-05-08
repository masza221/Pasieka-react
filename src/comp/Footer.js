import "../css/footer.css";

export default function Footer() {


  

  return (
    <footer className="footer showSocials">
    <div className="iko">
      <div className="footer__socials">
        <a
          title="facebook"
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/krystian.kobel.1"
          ><img loading="lazy" src="obrazy/fb.svg" alt="facebook"
        /></a>
      </div>
      <div className="footer__socials">
        <a
          title="youtube"
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/channel/UCGnLmj07AJbwlcP6clSqPsA"
          ><img loading="lazy" src="obrazy/yt.svg" alt="youtube"
        /></a>
      </div>
      <div className="footer__socials">
        <a
          title="instagram"
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/krystian.sw"
        >
          <img loading="lazy" src="obrazy/ig.svg" alt="instagram"
        /></a>
      </div>
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
