import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./styles/Tableau.css";
import PostIt from "./PostIt";
import Cadavre from "./Cadavre";
import CarteID from "./CarteIdentite";
import Enveloppe from "./Enveloppe";
import Usb from "./Usb";
import Autopsie from "./Autopsie";
import Telephone from "./Telephone";
import Constat from "./Constat";
import BurgerKing from "./BurgerKing";
import Message from "./Message";
import Couteau from "./Couteau";

gsap.registerPlugin(ScrollTrigger);

export default function Tableau() {
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + slider.current.offsetWidth,
                    markers: false
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <div className="Tableau" ref={component}>
            <div ref={slider} className="container">
                <div className="panel first-panel">
                    <PostIt text="Appuie sur les éléments pour les examiner" customClass="test"/>
                    <Cadavre/>
                </div>
                <div className="panel">
                    <CarteID/>
                    <Enveloppe/>
                    <Autopsie/>
                </div>
                <div className="panel">
                    <Usb/>
                    <Telephone></Telephone>
                    <PostIt text="Téléphone de la victime !!" customClass="post-it-tel"/>
                </div>
                <div className="panel">
                    <Constat></Constat>
                    <PostIt text="Constat? Accident ??" customClass="post-it-constat"/>
                    <BurgerKing></BurgerKing>
                </div>
                <div className="panel">
                    <Couteau/>
                    <Message/>
                </div>
            </div>
        </div>
    );
}
