import React, { useRef, useEffect } from "react";
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { Effects, OrbitControls, OrthographicCamera, BakeShadows, Html } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import './App.css'
import B12 from './components/three/models/B12'
import Text from './components/textThree/Text'

extend({ UnrealBloomPass })


let oldX = 0;
let oldY = 0;
const CameraController = () => {
    const controls = useRef();
    const { camera, scene } = useThree();
    const { children } = scene
    const object = children[1]
    console.log(object)
    useFrame(state => {
        // let changeX = state.mouse.x - oldX;
        // let changeY = state.mouse.y - oldY;
        // camera.position.x = changeX
        // camera.position.y = changeY
        object.rotation.x = -state.mouse.y/2
        object.rotation.y = -state.mouse.x/2

    })
}
function Box({position, color}) {
    const ref = useRef()
    return (
        <mesh receiveShadow position={position} ref={ref}>
            <boxBufferGeometry args={[30, 100, 1]} attach="geometry" />
            <meshPhongMaterial color={color} attach="material" />
        </mesh>
    )
}

export default function App() {

    return (
        <>

                <Canvas  shadows gl={{ antialias: false }}>
                    <CameraController/>
                    <color attach="background" args={['#d08b8b']} />
                    {/*<fog attach="fog" args={['#000000', 0, 60]} />*/}
                    <hemisphereLight intensity={.2} color="#000000" groundColor="white" />
                    <B12/>
                    {/*<ambientLight intensity={0.1} />*/}
                    <Box color="gray" position={[-2, 2, 18]} />
                    <Text/>
                    <directionalLight intensity={1}  position={[10, 10, -10]} />
                    {/*<Effects >*/}
                    {/*    <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />*/}
                    {/*</Effects>*/}
                    {/*<BakeShadows />*/}
                    <OrthographicCamera makeDefault far={90} near={-90}  position={[0, 0, -8]} zoom={90} />
                    <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
                </Canvas>

        </>
    );
}
