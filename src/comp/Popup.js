import { useState, useEffect } from 'react';
import '../css/popup.css';


const Popup = ({ active, setActive, popupId}) => {

    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await require(`../data/data.json`);
                
            const data = response.find(el => el.id === popupId)
            setValues(data);
            setLoading(false);
            
        };
        fetchData();
    }, [active, popupId]);

    const popupRemove = () => {
        setActive(false)
        document.querySelector("body").style.overflow = "auto";
    }

    return (
        <>
        {loading ===false && <div className="popup">
                <div className="close" onClick={popupRemove}>
                    <div></div>
                </div>
                <div className="popup-content">
                    <div className="pop-title">
                        <h2>{values.title}</h2>
                    </div>
                    <p className="cena">{values.price}</p>
                    <p>
                        {values.content}
                    </p>
                </div>
            </div> }
            
        </>

    )
}

export default Popup;