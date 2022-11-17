import React, {useEffect, useRef,useState} from 'react'
import Greetings from "./components/sections/Greetings/Greetings";
import Scene from './components/three/Scene/Scene'
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss'
import './App.scss'


const App = () =>  {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const scroller = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            mobileSmooth: true,
            lerp: .09,
            multiplier: 1.2
        });
        setTimeout(()=>{
            setIsLoading(false)
        },3000)
    }, []);

    return (
        <div data-scroll-container className='wrapper' >
            <div className={ isLoading ? 'LoaderBox' : 'empty'}></div>
            <div className="content">
                <Greetings/>
                <Scene />
            </div>
        </div>
    )
}

export default App

