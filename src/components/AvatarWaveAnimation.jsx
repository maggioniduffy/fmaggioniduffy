import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const FbxModel = ({ url, ...props }) => {
  const groupRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(url, (object) => {
      groupRef.current.add(object);

      // Load animations if present
      if (object.animations.length > 0) {
        mixerRef.current = new THREE.AnimationMixer(object);
        const action = mixerRef.current.clipAction(object.animations[0]);
        action.play();
      }
    });

    return () => {
      if (mixerRef.current) mixerRef.current.stopAllAction();
    };
  }, [url]);

  useEffect(() => {
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      if (mixerRef.current) {
        mixerRef.current.update(clock.getDelta());
      }
    };

    animate();
  }, []);

  return <group ref={groupRef} {...props} />;
};

export default function Bow(props) {
  return (
    <>
      {/* <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} /> */}
      <FbxModel url="/models/animations/bow.fbx" {...props} />
      {/* <OrbitControls /> */}
    </>
  );
}
