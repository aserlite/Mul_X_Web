import "./styles/Indices.css";
import couteau from '.././images/couteau.png';
import pin from '.././images/pin.png';


const Cadavre = () => {


    return (
        <div className="couteau_container">
            <img src={pin} alt="" className="pin"/>
            <img src={couteau} alt="couteauimg"/>
        </div>
    );
};

export default Cadavre;
