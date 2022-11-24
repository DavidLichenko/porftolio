import * as THREE from 'three'
import React, {Suspense, useState, useEffect, useRef } from 'react'
import { a, useTransition } from "@react-spring/web";
import {Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { UnrealBloomPass } from 'three-stdlib'
import {AdaptiveDpr, Html, PerspectiveCamera, useProgress, BakeShadows, Preload} from "@react-three/drei";
import B12 from "../models/B13";
import Ruin from "../models/RobotInRuinScene";
import './Scene.scss'
import DialogDiv from "./DialogDiv";

extend({ UnrealBloomPass })

export default function Scene(props){

    const cameraRef = useRef()

    const [numCount, setCount] = useState(0)
    // useEffect(() => {
    //     if (window.innerWidth > 768) {
    //         document.getElementById("CanvasSection").addEventListener("mousemove", MouseMove);
    //     }
    //     return () => {
    //         document.getElementById("CanvasSection").removeEventListener("mousemove", MouseMove);
    //     }
    // }, []);
    // function MouseMove(e) {
    //     // cameraRef.current.position.z = -3.84 + -e.clientX / window.innerWidth/6
    // }
    const Count = (value) => {
        setCount(value)
        return value
    }
    function Loader() {
        const { active, progress } = useProgress();
        const transition = useTransition(active, {
            from: { opacity: 1.6, progress: 0 },
            leave: { opacity: 0 },
            update: { progress },
        });
        return transition(
            ({ progress, opacity }, active) =>
                active && (
                    <a.div className='loading' style={{ opacity }}>
                        <div className='loading-bar-container'>
                            <a.div className='loading-bar' style={{ width: progress }}></a.div>
                        </div>
                    </a.div>
                )
        );
    }

    return (

        <div id="CanvasSection">

            <Canvas>
                <Suspense fallback={null}>
                    <mesh position={[-6,2,0]}>
                        <Html className="msg_div"  zIndexRange={[1, 0]}>
                            <DialogDiv  Count={Count}/>
                        </Html>
                    </mesh>
                    <B12 numCount={numCount}/>
                    {/*<Preload all />*/}
                    <hemisphereLight intensity={.7} color="#ffffff" groundColor="black" />
                    <ambientLight intensity={0.25} />
                    {/*<AdaptiveDpr pixelated />*/}
                    <PerspectiveCamera ref={cameraRef} castShadow makeDefault={true} far={1000} near={.9} fov={44.1} position={[0, 0, 0]} rotation={[0, 0, 0]} />
                    {/*<OrbitControls/>*/}
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    )
}
