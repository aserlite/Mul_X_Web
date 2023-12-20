import React, { useEffect, useRef } from "react";
import "./styles/Indices.css";

const Curseur = () => {
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorInner = cursorInnerRef.current;
        const links = document.querySelectorAll('a');

        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            cursorInner.style.left = x + 'px';
            cursorInner.style.top = y + 'px';
        };

        const handleLinkHover = () => {
            cursor.classList.add('hover');
        };

        const handleLinkLeave = () => {
            cursor.classList.remove('hover');
        };

        document.addEventListener('mousemove', handleMouseMove);


        links.forEach(item => {
            item.addEventListener('mouseover', handleLinkHover);
            item.addEventListener('mouseleave', handleLinkLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);


            links.forEach(item => {
                item.removeEventListener('mouseover', handleLinkHover);
                item.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor"></div>
            <div ref={cursorInnerRef} className="cursor2"></div>
        </>
    );
};

export default Curseur;
