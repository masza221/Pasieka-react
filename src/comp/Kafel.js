
import { useEffect } from 'react';
import {appearOnScroll} from '../appearOnScroll'
import { Link } from 'react-router-dom';


//------------pojawienie sie tekstu w info --------------//


const Kafel = ({products}) => {
    
  useEffect(()=>{
    const faders = document.querySelectorAll(".kafelki");
    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  },[products])


    return(
        products.map((el) => (
          <Link key={el.id} to={`/honey/${el.id}`}><div
              id={el.title}
              className="kafelki fadedown"
            >
              <div className="obraz">
                  <img src={el.img} alt='miod'  ></img>
              </div>
              <div className="tekst_pod_obrazem">
                <p>{el.name}</p>
              </div>
            </div></Link>
          
          ))
    )
    
}
export default Kafel