import React, { useRef, useEffect } from 'react'
import './Contacts.scss'

const Contacts = () => {
    const eyeRef = useRef()
    useEffect(() => {
        if (window.innerWidth > 768) {
            document.querySelector(".contacts__section").addEventListener("mousemove", EyeMove);
        }
        return () => {
            document.querySelector(".contacts__section").removeEventListener("mousemove", EyeMove);
        }
    }, []);
    const EyeMove = (e) => {
        // eyeRef.current.clientHeight = -e.clientY / window.innerWidth/6
        let eyeX = eyeRef.current.getBoundingClientRect().left + eyeRef.current.clientWidth / 2
        let eyeY = eyeRef.current.getBoundingClientRect().top + eyeRef.current.clientHeight / 2
        let x = e.clientX;
        let y = e.clientY;
        let rotationDegreesX = x - eyeX
        let rotationDegreesY = y - eyeY
        eyeRef.current.style.transform = "translate(" + rotationDegreesX/30 + "px," + rotationDegreesY/30 + "px)";
        // eyeRef.current.clientWidth = -e.clientX / window.innerWidth/6

        // eyeRef.current.style.cssText = `transform: translateY (${-e.clientY})`
    }

    return (
        <section className="contacts__section">
            <div className="layers">
                <div className="layer contacts__layer__base"></div>
                <div ref={eyeRef} className="layer contacts__layer__eye"></div>
                <div className="layer contacts__layer__middle" data-scroll  data-scroll-speed="-1"></div>
            </div>
        </section>
    )
}

export default Contacts