import React, {useState} from "react";
import "./styles/Indices.css";
import mail from '../images/iphone.png'

const LockScreen = ({onClose}) => {
    const [code, setCode] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const correctCode = "1974";
    const handleDigitClick = (digit) => {
        if (code.length < 4 && !isUnlocked) {
            setCode((prevCode) => prevCode + digit);
        }
    };

    const handleBackspaceClick = () => {
        if (!isUnlocked) {
            setCode((prevCode) => prevCode.slice(0, -1));
        }
    };

    const handleUnlockClick = () => {
        if (code === correctCode) {
            setIsUnlocked(true);
        } else {
            setCode("");
            alert("Code incorrect. Réessayez.");
        }
    };

    return (
        <div className={"lock-screen-container " + (!isUnlocked ? 'lock_test' : '')}>
            {isUnlocked &&
                <div className="unlocked-content">
                    <img
                        src={mail}
                        alt="déverrouillée"
                    />
                </div>
            }
            <div className='lock-screen'>
                <div className="lock-screen-display">{code}</div>
                <div className="lock-screen-keypad">
                    <button onClick={() => handleDigitClick("1")}>1</button>
                    <button onClick={() => handleDigitClick("2")}>2</button>
                    <button onClick={() => handleDigitClick("3")}>3</button>
                    <button onClick={() => handleDigitClick("4")}>4</button>
                    <button onClick={() => handleDigitClick("5")}>5</button>
                    <button onClick={() => handleDigitClick("6")}>6</button>
                    <button onClick={() => handleDigitClick("7")}>7</button>
                    <button onClick={() => handleDigitClick("8")}>8</button>
                    <button onClick={() => handleDigitClick("9")}>9</button>
                    <button onClick={handleBackspaceClick}>←</button>
                    <button onClick={() => handleDigitClick("0")}>0</button>
                </div>
                <button className="unlock-button" onClick={handleUnlockClick}>
                    Déverrouiller
                </button>
            </div>

        </div>
    )
        ;
};

export default LockScreen;