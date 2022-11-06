import { extend } from '@react-three/fiber'
import { FontLoader } from "three-stdlib";
import { TextGeometry } from "three-stdlib";
import orbitron from '../../assets/Orbitron_Regular.json'

extend({ TextGeometry })

export default function Text() {
    const font = new FontLoader().parse(orbitron)
    return (
        <mesh castShadow rotation={[-Math.PI / 30, 3, 0]} position={[2,0,5]}>
            <textGeometry args={['Dovid {}O"|_|"O{} ' ,{font, size: 1.2, height: 0.1}]}/>
            <meshPhysicalMaterial attach='material' metalness={2} roughness={.6} color={'dimgray'}/>
        </mesh>
    )


}
