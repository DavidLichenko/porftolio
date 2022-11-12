import { extend } from '@react-three/fiber'
import { FontLoader } from "three-stdlib";
import { TextGeometry } from "three-stdlib";
import orbitron from '../../assets/Orbitron_Regular.json'

extend({ TextGeometry })

export default function Text() {
    const font = new FontLoader().parse(orbitron)
    return (
        <mesh castShadow rotation={[0,-Math.PI/2, 0]} position={[8.35,4.56,-4.44]}>
            <textGeometry args={['Dovid {}O"|_|"O{} ' ,{font, size: .3, height: 0.1}]}/>
            <meshPhysicalMaterial attach='material' metalness={0} roughness={0} color={'black'}/>
        </mesh>
    )


}
