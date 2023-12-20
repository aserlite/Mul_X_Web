// Résolution.jsx
import React, { useState } from "react";
import "./styles/Resolution.css";
import Arthur from '../images/Resolution/arthur.png';
import Julian from '../images/Resolution/julian.png';
import Margaux from '../images/Resolution/margaux.png';
import Couteau from '../images/Resolution/couteaupola.png';
import Whopper from '../images/Resolution/whopper.png';
import Totebag from '../images/Resolution/totebag.png';

const Résolution = () => {
    const [selectedSuspect, setSelectedSuspect] = useState(null);
    const [selectedWeapon, setSelectedWeapon] = useState(null);

    const handleSuspectSelect = (suspect) => {
        setSelectedSuspect(suspect);
    };

    const handleWeaponSelect = (weapon) => {
        setSelectedWeapon(weapon);
    };

    const handleGuess = () => {
        if (selectedSuspect && selectedWeapon) {
            console.log();
            if(selectedSuspect.slice(14).split('.')[0] === "arthur" && selectedWeapon.slice(14).split('.')[0] === "whopper"){
                alert("Félicitation, vous avez démasqué le traitre!");
            }else{
                alert("Oups, un innocent a pris 15ans de prison a cause de toi.")
            }
        } else {
            alert("Veuillez sélectionner un suspect et une arme avant de deviner.");
        }
    };

    return (
        <div className={"resolution_container"}>
            <h1>Résolution</h1>
            <div>
                <h2>Suspect</h2>
                <div className={"suspects"}>
                    <img
                        src={Julian}
                        alt="Julian"
                        onClick={() => handleSuspectSelect(Julian)}
                        className={`suspect-image ${selectedSuspect === Julian ? "selected" : ""}`}
                    />
                    <img
                        src={Arthur}
                        alt="Arthur"
                        onClick={() => handleSuspectSelect(Arthur)}
                        className={`suspect-image ${selectedSuspect === Arthur ? "selected" : ""}`}
                    />
                    <img
                        src={Margaux}
                        alt="Margaux"
                        onClick={() => handleSuspectSelect(Margaux)}
                        className={`suspect-image ${selectedSuspect === Margaux ? "selected" : ""}`}
                    />
                </div>
                <h2>Arme</h2>
                <div className={"armes"}>
                    <img
                        src={Couteau}
                        alt="Couteau"
                        onClick={() => handleWeaponSelect(Couteau)}
                        className={`arme-image ${selectedWeapon === Couteau ? "selected" : ""}`}
                    />
                    <img
                        src={Whopper}
                        alt="Whopper"
                        onClick={() => handleWeaponSelect(Whopper)}
                        className={`arme-image ${selectedWeapon === Whopper ? "selected" : ""}`}
                    />
                    <img
                        src={Totebag}
                        alt="Totebag"
                        onClick={() => handleWeaponSelect(Totebag)}
                        className={`arme-image ${selectedWeapon === Totebag ? "selected" : ""}`}
                    />
                </div>
            </div>
            <button onClick={handleGuess}>Deviner</button>
        </div>
    );
};

export default Résolution;
