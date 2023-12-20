// Telephone.jsx
import React, {useEffect, useRef, useState} from "react";
import "./styles/Indices.css";
import Telephoneimg from '.././images/phone.png';
import pin from '.././images/pin.png';
import LockScreen from "./Lockscreen";

const Telephone = () => {
    const telephone = useRef();
    const [lockScreenVisible, setLockScreenVisible] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event) => {
            const domNode = telephone.current;

            if (!domNode || !domNode.contains(event.target)) {
                setLockScreenVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const handleTelephoneClick = () => {
        setLockScreenVisible(true);
    };

    const handleLockScreenClose = () => {
        setLockScreenVisible(false);
    };

    return (
        <div className="container_tel" ref={telephone}>
            <img src={pin} alt="" className="pin" />
            <img
                src={Telephoneimg}
                alt="cadavre"
                onClick={handleTelephoneClick}
            />
            {lockScreenVisible && <LockScreen onClose={handleLockScreenClose} />}
        </div>
    );
};

export default Telephone;
