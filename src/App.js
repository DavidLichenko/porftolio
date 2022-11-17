import React, {useEffect, useRef,useState} from 'react'
import Greetings from "./components/sections/Greetings/Greetings";
import Scene from './components/three/Scene/Scene'
import Skills from "./components/sections/Skills/Skills";
import Contacts from "./components/sections/Contacts/Contacts";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss'
import './App.scss'


const App = () =>  {
        useEffect(() => {
        const scroller = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            mobileSmooth: true,
            lerp: .09,
            multiplier: 1.2
        });
    }, []);
    return (
        <div data-scroll-container className='wrapper' >
            <div className="content">
                <Greetings />
                <Scene />
                <Skills />
                <Contacts />
            </div>
        </div>
    )
}

export default App

