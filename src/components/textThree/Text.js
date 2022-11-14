import React, { useRef } from "react";
import { extend, useFrame } from '@react-three/fiber'
import { Text3D,Text } from "@react-three/drei";
import { FontLoader, TextGeometry } from "three-stdlib";
import orbitron from '../../assets/Orbitron_Regular.json'

export default function Texts(props) {
    const Texts = () => {
        const textRef = useRef();
        useFrame(() => {
            textRef.current.position.y = -1 + props.Scroll;
        });
        let text = `
Hi, my name is David Lichenko.

I have big peepee and

I write realy beautiful codes.

I’m a profesional in Java Script and

loving Tonya, Mykolka and Stepashka.

Also I can study everything too fast,

 so you have to give me really cool tasks.

Otherwise I will leave you like

I’ve left fuckers from Taburetka.
`;
        return (
            // <Text3D
            //     ref={textRef}
            //     bevelEnabled
            //     bevelSize={0.04}
            //     bevelThickness={0.07}
            //     height={0.001}
            //     position={[6.85,4.56,-5.44]}
            //     lineHeight={0.5}
            //     letterSpacing={-0.06}
            //     // rotation={}
            //     size={.4}
            //     font={orbitron}>
            //     Hello world!
            //     <meshStandardMaterial color="#700000" />
            // </Text3D>
            <Text receiveShadow ref={textRef} position={[6.85,-1,-2.44]} fontSize={.3} rotation={[0,-Math.PI/2,0]} font={orbitron} characters="abcdefghijklmnopqrstuvwxyz0123456789!">
               {text}
                <meshStandardMaterial color="#700000" clearcoat={0.01} roughness={0.2} metalness={1} />
            </Text>
        )
    }

    return (
       <Texts/>
    )


}
