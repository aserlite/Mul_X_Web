import "./styles/Indices.css";
import CarteID from '.././images/carteID.png';
import pin from '.././images/pin.png';



const Vue = () => {

    return (
        <div className="Id_container">
            <img src={pin} alt="" className="pin"/>
            <div>
                <img src={CarteID} alt="image de carte d'id" className="img_ci"/>
            </div>
            <div className="ancre"></div>
        </div>
    )
        ;
};

export default Vue;