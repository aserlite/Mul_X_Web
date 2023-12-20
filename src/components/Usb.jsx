import React, {useEffect, useRef, useState} from "react";
import "./styles/Indices.css";
import CleUsb from '.././images/usb.png';
import pin from '.././images/pin.png';
import video from '.././images/Alive.mp4';

const ClickComponent = () => {
    const [imagePleineEcranVisible, setImagePleineEcranVisible] = useState(false);
    const enveloppeRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            const domNode = enveloppeRef.current;
            const video = videoRef.current;

            if (!domNode || !domNode.contains(event.target)) {
                setImagePleineEcranVisible(false);
                video.pause();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleEnveloppeClick = () => {
        setImagePleineEcranVisible(!imagePleineEcranVisible);
    };
    const videoRef = useRef(null);

    const handleButtonClick = () => {
        const video = videoRef.current;

        if (video.paused || video.ended) {
            video.play();
            handleEnveloppeClick();
        } else {
            video.pause();
            handleEnveloppeClick();
        }
    };

    return (
        <div className="click-component" onClick={handleButtonClick} ref={enveloppeRef}>
            <div className="container_usb">
                <img src={pin} alt="pin" className="pin"/>
                <div>
                    <img src={CleUsb} alt="clef Usb" className="img_Usb"/>
                </div>
            </div>
            <div className={imagePleineEcranVisible ? "fullscreen-video-container" : "hidden"}>
                <video ref={videoRef} className="fullscreen-video" onEnded={handleEnveloppeClick}>
                    <source src={video} type="video/mp4"/>
                    Votre navigateur ne supporte pas l'élément vidéo.
                </video>
            </div>
        </div>
    );
};

export default ClickComponent;
