import "./styles/Indices.css";
import TicketBK from '.././images/ticketBK.png';
import pin from "../images/pin.png";
import React from "react";


const Ticket = () => {

    return (

        <div className="container_bk">
            <img src={pin} alt="pin" className="pin"/>

            <img src={TicketBK} alt="TicketBK" className="TicketBK"/>

        </div>
    );
};

export default Ticket;
