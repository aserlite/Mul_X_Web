import "./styles/Indices.css";
import cadavreimage from '.././images/cadavre.jpg';
import pin from '.././images/pin.png';


const Cadavre = ({ text, customClass }) => {


    return (
        <div className="container_test">
            <div className="cadavre_container">
                <img src={pin} alt="" className="pin"/>
                <img src={cadavreimage} alt="cadavre"/>
            </div>
        </div>
    );
};

export default Cadavre;
