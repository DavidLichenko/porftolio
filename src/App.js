import React, {useEffect, useRef,useState,useLayoutEffect} from 'react'
import Greetings from "./components/sections/Greetings/Greetings";
import Scene from './components/three/Scene/Scene'
import Skills from "./components/sections/Skills/Skills";
import Contacts from "./components/sections/Contacts/Contacts";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import './App.scss'


const App = () =>  {
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        const scroller = new LocomotiveScroll({
            el: document.querySelector('.smooth-scroll'),
            smooth: true,
            mobileSmooth: true,
            tablet: { smooth: true },
            lerp: .09,
            multiplier: 1.2
        });
        scroller.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(".smooth-scroll", {
            scrollTop(value) {
                return arguments.length
                    ? scroller.scrollTo(value, 0, 0)
                    : scroller.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        });
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills__section",
                scroller: ".smooth-scroll",
                scrub:1,
                pin: false,
                start: "top center",
                end: "bottom bottom"
            }
        })
        scrollTimeline.from(".filled", {
            backgroundColor: '#363633',
        });
        scrollTimeline.to(".filled", {
            backgroundColor: '#ff5900',
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.update());
        ScrollTrigger.refresh();
        return () => {
            scroller.off("scroll", ScrollTrigger.update);
            scroller.destroy()
        }

    }, []);
    return (
        <div data-scroll-container className='wrapper smooth-scroll' >
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

