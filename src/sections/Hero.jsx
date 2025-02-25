import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Target from "../components/Target";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 text-center">
        <p className="sm:text-3xl text-2xl font-thin text-white text-center font-general-sans">
          {" "}
          Hello there! <br />{" "}
          <span className="font-medium"> I am Faustino </span>
          <span className="waving-hand">🌠</span>
        </p>
        <p className="text-gray_gradient hero-tag text-xl">
          {" "}
          Building & Developing some products... <br />{" "}
          <b> Always learning. </b>
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full pt-10">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={0.05}
              position={[0, 0, 0]}
              rotation={[0.2, -Math.PI, 0]}
            />
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
