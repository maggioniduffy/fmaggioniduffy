// const ReactLogo = (props) => {
//   const { nodes, materials } = useGLTF("/models/react_logo_circle.glb");
//   return (
//     <Float floatIntensity={10}>
//       <group
//         position={[8, 0, 0]}
//         rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//         {...props}
//         scale={0.4}
//       >
//         <group rotation={[Math.PI / 2, 0, 0]} scale={0.3} dispose={null}>
//           <mesh
//             geometry={nodes["React-Logo_Material002_0"].geometry}
//             material={materials["Material.002"]}
//             position={[15, 9.935, -10]}
//             rotation={[-Math.PI / 2, Math.PI / 2, 100]}
//             scale={[0.45, 0.45, 0.45]}
//           />
//           <mesh
//             geometry={nodes.Backdrop_Material001_0.geometry}
//             material={materials["Material.001"]}
//             position={[13, 9.935, -10]}
//             rotation={[-Math.PI / 2, Math.PI / 2, 100]}
//             scale={[3, 3, 4]}
//           />
//         </group>
//       </group>
//     </Float>
//   );
// };

// useGLTF.preload("/models/react_logo_circle.glb");
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, Float, Line, Sphere, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Atom(props) {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={6.5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={7}
      />
      <Sphere args={[0.35, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <Trail
        width={5}
        length={10}
        color={new THREE.Color(2, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}

const ReactLogo = (props) => {
  return (
    <group {...props}>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Atom {...props} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} {...props} />
        </EffectComposer>
      </Float>
    </group>
  );
};

export default ReactLogo;
