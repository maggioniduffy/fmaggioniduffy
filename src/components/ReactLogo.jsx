import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react_logo_circle.glb");
  return (
    <Float floatIntensity={10}>
      <group
        position={[8, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        {...props}
        scale={0.4}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.3} dispose={null}>
          <mesh
            geometry={nodes["React-Logo_Material002_0"].geometry}
            material={materials["Material.002"]}
            position={[15, 9.935, -10]}
            rotation={[-Math.PI / 2, Math.PI / 2, 100]}
            scale={[0.45, 0.45, 0.45]}
          />
          <mesh
            geometry={nodes.Backdrop_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[13, 9.935, -10]}
            rotation={[-Math.PI / 2, Math.PI / 2, 100]}
            scale={[3, 3, 4]}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react_logo_circle.glb");

export default ReactLogo;
