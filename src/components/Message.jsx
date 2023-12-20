import "./styles/PostIt.css";
import image from '.././images/note.png';
import pin from '.././images/pin.png';
import audioMargaxmp3 from "../images/audiomargaux.mp3";
import audioPapamp3 from "../images/audiodaron.mp3";
import audioIrishmp3 from "../images/audioirish.mp3";
import React, {useRef} from "react";

const PostIt = () => {
    const audioPapa = useRef(null);
    const audioMargax = useRef(null);
    const audioIrish = useRef(null);

    const Papa = () => {
        audioMargax.current.pause();
        audioIrish.current.pause();
        if (audioPapa.current.paused) {
            audioPapa.current.play();
        } else {
            audioPapa.current.currentTime = 0;
        }
    };
    const Margax = () => {
        audioIrish.current.pause();
        audioPapa.current.pause();
        if (audioMargax.current.paused) {
            audioMargax.current.play();
        } else {
            audioMargax.current.currentTime = 0;
        }
    };
    const Irish = () => {
        audioMargax.current.pause();
        audioPapa.current.pause();
        if (audioIrish.current.paused) {
            audioIrish.current.play();
        } else {
            audioIrish.current.currentTime = 0;
        }
    };

    return (
        <div className={"post-it postitMessage"}>
            <img src={pin} alt="" className="pin"/>
            <div>
                <p>
                    Messages vocaux de Julian <br/>
                    <span onClick={Papa}>papa (19/12/23 16:04)</span><br/>
                    <span onClick={Irish}>irish (19/12/23 13:02)</span><br/>
                    <span onClick={Margax}>margax (18/12/23 17:53)</span>
                </p>
                <img src={image} alt="post it"/>
            </div>
            <audio ref={audioPapa}>
                <source src={audioPapamp3} type="audio/mpeg"/>
            </audio>
            <audio ref={audioIrish}>
                <source src={audioIrishmp3} type="audio/mpeg"/>
            </audio>
            <audio ref={audioMargax}>
                <source src={audioMargaxmp3} type="audio/mpeg"/>
            </audio>
        </div>
    );
};

export default PostIt;
