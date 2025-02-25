import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react_logo_circle.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["React-Logo_Material002_0"].geometry}
            material={materials["Material.002"]}
            position={[10, 9.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[39.166 / 2, 39.166 / 2, 52.734 / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Backdrop_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-7.091, 9.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[247.854 / 2, 247.854 / 2, 52.734 / 2]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/react_logo_circle.glb");

export default ReactLogo;
