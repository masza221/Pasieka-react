
const Kafel = ({popups, showPopup}) => {
    


    return(
        popups.map((el) => (
            <div
              key={el.id}
              id={el.title}
              className="kafelki"
              onClick={() => showPopup(el.id, true)}
            >
              <div className="obraz">
                  <img src={el.img}  ></img>
              </div>
              <div className="tekst_pod_obrazem">
                <p>{el.name}</p>
              </div>
            </div>
          ))
    )
    
}
export default Kafel