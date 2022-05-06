
import { useEffect } from 'react';
import {appearOnScroll} from '../appearOnScroll'


//------------pojawienie sie tekstu w info --------------//


const Kafel = ({popups, showPopup}) => {
    
  useEffect(()=>{
    const faders = document.querySelectorAll(".kafelki");
    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  },[popups])


    return(
        popups.map((el) => (

          <div
              key={el.id}
              id={el.title}
              className="kafelki fadedown"
              onClick={() => showPopup(el.id, true)}
            >
              <div className="obraz">
                  <img src={el.img} alt='miod'  ></img>
              </div>
              <div className="tekst_pod_obrazem">
                <p>{el.name}</p>
              </div>
            </div>
          ))
    )
    
}
export default Kafel