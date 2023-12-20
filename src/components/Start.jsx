import React, {useEffect, useRef, useState} from "react";
import "./styles/Start.css";
import videoBoucle from '../images/introboucle.mp4';
import videoAutre from '../images/introblabla.mp4';

export default function Start() {
    const videoRef = useRef(null);
    const [afficherDeuxiemeVideo, setAfficherDeuxiemeVideo] = useState(false);
    const handleVideoEnded = () => {
        console.log("La vidéo est terminée");
        setAfficherDeuxiemeVideo(false);

        document.body.classList.remove("disable-scroll");
    };
    useEffect(() => {
        const video = videoRef.current;

        const handleVideoLoaded = () => {
            video.play().catch(error => {
                console.error("Erreur de lecture automatique :", error);
            });
        };

        video.addEventListener('loadeddata', handleVideoLoaded);

        return () => {
            video.removeEventListener('loadeddata', handleVideoLoaded);
        };
    }, []);

    const handleClick = () => {
        console.log("test");
        setAfficherDeuxiemeVideo(true);

        document.body.classList.add("disable-scroll");
    };


    return (
        <div className="Start">
            <div className="intro">

                {afficherDeuxiemeVideo ? (
                    <video className="fullscreen-video" autoPlay onEnded={handleVideoEnded}>
                        <source src={videoAutre} type="video/mp4"/>
                        Votre navigateur ne supporte pas l'élément vidéo.
                    </video>
                ) : (
                    <>
                        <div>
                            <span>L'affaire Hayenne</span>
                            <button onClick={handleClick}>Commencer l'enquête</button>
                        </div>
                        <div className="videoIntroBoucle">
                            <video ref={videoRef} className="fullscreen-video" autoPlay loop controls muted>
                                <source src={videoBoucle} type="video/mp4"/>
                                Votre navigateur ne supporte pas l'élément vidéo.
                            </video>
                        </div>
                    </>
                )
                }
            </div>
        </div>
    )
        ;
}
