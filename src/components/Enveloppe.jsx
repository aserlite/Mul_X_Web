import React, { useState, useEffect, useRef } from "react";
import "./styles/Indices.css";
import Enveloppeimg from '.././images/enveloppe.png';
import pin from '.././images/pin.png';
import ImagePleineEcran from './EnveloppePleinEcran';
import papersound from "../images/paper.mp3";

const Enveloppe = () => {
    const [imagePleineEcranVisible, setImagePleineEcranVisible] = useState(false);
    const enveloppeRef = useRef();
    const audioRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const domNode = enveloppeRef.current;

            if (!domNode || !domNode.contains(event.target)) {
                setImagePleineEcranVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleEnveloppeClick = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.currentTime = 0;
        }
        setImagePleineEcranVisible(!imagePleineEcranVisible);
    };

    return (
        <div className="container_evlp" onClick={handleEnveloppeClick} ref={enveloppeRef}>
            <img src={pin} alt="pin" className="pin"/>
            <div>
                <img src={Enveloppeimg} alt="de Enveloppe" className="img_Enveloppe"/>
            </div>
            <audio ref={audioRef}>
                <source src={papersound} type="audio/mpeg"/>
            </audio>
            {/* Affichez l'image en plein écran si l'état est true */}
            {imagePleineEcranVisible && <ImagePleineEcran/>}
        </div>
    );
};

export default Enveloppe;
