import '../css/info.css';
import { useEffect } from 'react';
import {appearOnScroll} from '../appearOnScroll'




const Info = () => {

   
  useEffect(()=>{
   const faders = document.querySelectorAll(".info");
   faders.forEach((fader) => {
     appearOnScroll.observe(fader);
   });
 },[])


    return (
        <div id='about' className='about'>
           <div className="info fadeup">
           <p>
              <img src="obrazy/warranty.svg" alt="jakość" /><br />
              Najwyższa jakość → <br />
              Pasieka Kobla oferuje w pełni naturalny miód z polskiej pasieki,
              wyprodukowany na roztoczu bez wspomagaczy. Sprawdź i przekonaj się
              sam że mamy najlepszy miód na roztoczu.
            </p>
           </div>
           <div className="info fadedown">
           <p>
              <img src="obrazy/warranty.svg" alt="jakość" /><br />
              Najwyższa jakość → <br />
              Pasieka Kobla oferuje w pełni naturalny miód z polskiej pasieki,
              wyprodukowany na roztoczu bez wspomagaczy. Sprawdź i przekonaj się
              sam że mamy najlepszy miód na roztoczu.
            </p>
           </div>
           <div className="info fadeup">
           <p>
              <img src="obrazy/warranty.svg" alt="jakość" /><br />
              Najwyższa jakość → <br />
              Pasieka Kobla oferuje w pełni naturalny miód z polskiej pasieki,
              wyprodukowany na roztoczu bez wspomagaczy. Sprawdź i przekonaj się
              sam że mamy najlepszy miód na roztoczu.
            </p>
           </div>
           <div className="info fadedown">
           <p>
              <img src="obrazy/warranty.svg" alt="jakość" /><br />
              Najwyższa jakość → <br />
              Pasieka Kobla oferuje w pełni naturalny miód z polskiej pasieki,
              wyprodukowany na roztoczu bez wspomagaczy. Sprawdź i przekonaj się
              sam że mamy najlepszy miód na roztoczu.
            </p>
           </div>
 
        </div>
       
    )
}

export default Info;