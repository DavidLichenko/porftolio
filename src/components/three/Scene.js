import React, {Suspense, useState} from 'react'
import {Canvas, extend, useFrame, useThree} from "@react-three/fiber";
import { UnrealBloomPass } from 'three-stdlib'
import {AdaptiveDpr, Html} from "@react-three/drei";
import B12 from "./models/B12";
import Ruin from "./models/RobotInRuinScene";

extend({ UnrealBloomPass })


const CameraController = () =>  {
    const { camera, scene } = useThree();
    const object = scene.getObjectByName("B12")
    useFrame(state => {
        let changeX = state.mouse.x - 30;
        let changeY = state.mouse.y + 9;
        camera.position.z = changeX/8
        camera.position.y = changeY/8
        // object.rotation.z = -state.mouse.y/4
        object.rotation.y = -3.141592653589793 - -state.mouse.x/3
    })
}

const Scene = () => {


    const [Light,setLight] = useState(0)
    let [Scroll,setScroll] = useState(0)


    return (
        <Canvas
            onClick={(e) => {
                setLight(Light ? 0 : 20)
            }}
            onWheel={(e) =>  {
                setScroll(Scroll += e.deltaY > 0 ? +0.2 : -0.2)
            }}

            dpr={[1, 1.5]}
            gl={{toneMappingExposure: .4}}
            shadows>
            <Suspense fallback={null}>
                <CameraController/>
                <Html>

                </Html>
                <fog attach="fog" args={['#006477', 0, 30]} />
                <hemisphereLight intensity={.2} color="#ffffff" groundColor="black" />
                <B12 Light={Light} setLight={setLight}/>
                <ambientLight intensity={0.05} />
                <Ruin/>
                <AdaptiveDpr pixelated />
            </Suspense>
        </Canvas>
    )
}

export default Scene