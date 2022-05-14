import './about.css';
import { useEffect } from 'react';
import {appearOnScroll} from '../../Utils/appearOnScroll'
import Info from './Info/Info';




const About = () => {

   
  useEffect(()=>{
   const faders = document.querySelectorAll(".info");
   faders.forEach((fader) => {
     appearOnScroll.observe(fader);
   });
 },[])


    return (
        <div id='about' className='about'>
          <Info 
            fade="fadeup"
            imgSrc="obrazy/warranty.svg"
            imgAlt="jakość"
            title="Najwyższa jakość →"
            content="Pasieka Kobla oferuje w pełni naturalny miód z polskiej pasieki,
            wyprodukowany na roztoczu bez wspomagaczy. Sprawdź i przekonaj się
            sam że mamy najlepszy miód na roztoczu."
          />
        
        <Info 
            fade="fadedown"
            imgSrc="obrazy/warranty.svg"
            imgAlt="jakość"
            title="Najwyższa jakość →"
            content="Pasieka Kobla oferuje w pełni naturalny miód z polskiej pasieki,
            wyprodukowany na roztoczu bez wspomagaczy. Sprawdź i przekonaj się
            sam że mamy najlepszy miód na roztoczu."
          />
           <Info 
            fade="fadeup"
            imgSrc="obrazy/warranty.svg"
            imgAlt="jakość"
            title="Najwyższa jakość →"
            content="Pasieka Kobla oferuje w pełni naturalny miód z polskiej pasieki,
            wyprodukowany na roztoczu bez wspomagaczy. Sprawdź i przekonaj się
            sam że mamy najlepszy miód na roztoczu."
          />
           <Info 
            fade="fadedown"
            imgSrc="obrazy/warranty.svg"
            imgAlt="jakość"
            title="Najwyższa jakość →"
            content="Pasieka Kobla oferuje w pełni naturalny miód z polskiej pasieki,
            wyprodukowany na roztoczu bez wspomagaczy. Sprawdź i przekonaj się
            sam że mamy najlepszy miód na roztoczu."
          />
        </div>
       
    )
}

export default About;