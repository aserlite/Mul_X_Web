import React, { useState } from "react";
import "./styles/Indices.css";
import Testament from '.././images/Testament.png';
import pin from '.././images/pin.png';
import Curseur from "./Curseur";

const Enveloppe = () => {

    return (

        <div className="Testament_container">

            <img src={Testament} alt="Testament" className="Testament"/>
            <Curseur/>

        </div>
    );
};

export default Enveloppe;
