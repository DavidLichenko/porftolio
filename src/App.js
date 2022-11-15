import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Greetings from "./components/sections/Greetings/Greetings";
import Scene from './components/three/Scene/Scene'
import { gsap } from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import './App.scss'


const App = () =>  {
    const el = useRef();
    const q = gsap.utils.selector(el);

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    useLayoutEffect(() => {
        let smoother = ScrollSmoother.create({
            smooth: 1,
            wrapper: '.wrapper',
            content: '.content',
            effects: true
        });
        return () => {
            smoother.kill();
        };
    }, []);

    //ParallaxEffect
    useEffect(() => {
        window.addEventListener('scroll', e => {
            document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`)
        });
        // cleanup this component
        return () => {
            window.removeEventListener('scroll', e => {
                document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`)
            });
        };
    }, []);

    return (
        <div ref={el} className="wrapper">
            <div className="content">
                <Greetings/>
                {/*<div>App</div>*/}
                <Scene/>
            </div>
        </div>
    )
}

export default App

