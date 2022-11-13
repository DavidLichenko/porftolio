
import React, { useRef,useState, Suspense } from "react";
import * as THREE from 'three'
import { Canvas, extend, useThree, useFrame} from '@react-three/fiber'
import { AdaptiveDpr, OrbitControls } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import './App.css'
import B12 from './components/three/models/B12'
import Ruin from './components/three/models/RobotInRuinScene'
import Texts from './components/textThree/Text'

extend({ UnrealBloomPass })


function CameraController()  {
    const controls = useRef();

    const { camera, scene } = useThree();
    const object = scene.getObjectByName("B12")
    // console.log(object)
    useFrame(state => {
        let changeX = state.mouse.x - 30;
        let changeY = state.mouse.y + 9;
        camera.position.z = changeX/8
        camera.position.y = changeY/8
        object.rotation.y = -state.mouse.y/4
        object.rotation.z = -3.141592653589793 - state.mouse.x/3
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


    const [Light,setLight] = useState(0)
    let [Scroll,setScroll] = useState(0)

    return (
        <>

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

                    {/*<color attach="background" args={['#d08b8b']} />*/}
                    <fog attach="fog" args={['#006477', 0, 30]} />
                    {/*<hemisphereLight intensity={1} color="#000000" groundColor="black" />*/}
                    <B12 Light={Light} setLight={setLight}/>
                    <ambientLight intensity={0.05} />
                    <Ruin/>
                    <Texts Scroll={Scroll} setScroll={setScroll}/>
                    <AdaptiveDpr pixelated />
                    {/*<Box color="black" position={[-2, 2, 18]} />*/}
                    {/*<BakeShadows/>*/}
                    {/*<directionalLight intensity={1}  position={[10, 10, -10]} />*/}
                    {/*<Effects >*/}
                    {/*    <unrealBloomPass threshold={.8} strength={1} radius={.01} />*/}
                    {/*</Effects>*/}
                    {/*<OrthographicCamera makeDefault far={90} near={-90}  position={[0, 0, -8]} zoom={90} />*/}
                    {/*<OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />*/}

                </Suspense>
            </Canvas>

        </>
    );
}
