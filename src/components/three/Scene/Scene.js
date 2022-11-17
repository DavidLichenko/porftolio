import * as THREE from 'three'
import React, {Suspense, useState, useEffect, useRef, useCallback} from 'react'
import {Canvas, extend, useFrame, useThree} from "react-three-fiber";
import { UnrealBloomPass } from 'three-stdlib'
import {AdaptiveDpr, Html, PerspectiveCamera, Loader, OrbitControls} from "@react-three/drei";
import B12 from "../models/B12";
import Ruin from "../models/RobotInRuinScene";
import './Scene.scss'
import DialogDiv from "./DialogDiv";

extend({ UnrealBloomPass })

export default function Scene(props){

    const cameraRef = useRef()

    useEffect(() => {
        if (window.innerWidth > 768) {
            document.getElementById("CanvasSection").addEventListener("mousemove", MouseMove);
        }
        return () => {
            document.getElementById("CanvasSection").removeEventListener("mousemove", MouseMove);
        }
    }, []);
    function MouseMove(e) {
        cameraRef.current.position.z = -3.84 + -e.clientX / window.innerWidth/6
    }


    // const [Light,setLight] = useState(0)
    // let [Scroll,setScroll] = useState(0)
    return (

        <section id="CanvasSection" >
            <Canvas
                // onClick={(e) => {
                //     setLight(Light ? 0 : 20)
                // }}

                dpr={[0, 1]}
                gl={{toneMappingExposure: .4}}
                shadows>
                <Suspense fallback={null}>
                    <mesh position={[3.85,3.56,-8.44]}>
                        <Html className="msg_div"  zIndexRange={[1, 0]}>
                            <DialogDiv  />
                        </Html>
                    </mesh>
                    {/*<Rig/>*/}
                    <B12/>
                    <Ruin/>

                    <fog attach="fog" args={['#006477', 0, 30]} />
                    <hemisphereLight intensity={.2} color="#ffffff" groundColor="black" />
                    <ambientLight intensity={0.05} />
                    <AdaptiveDpr pixelated />
                    <PerspectiveCamera ref={cameraRef} castShadow makeDefault={true} far={1000} near={0.9} fov={44.1} position={[-2.93, 1.2, -3.84]} rotation={[0.22, -1.51, 0.22]} />
                    {/*<OrbitControls/>*/}
                </Suspense>
            </Canvas>
            <Loader/>
        </section>
    )
}
