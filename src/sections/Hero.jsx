import { PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Target from "../components/Target";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Ring.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import Bow from "../components/AvatarWaveAnimation.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-fit mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-xl font-semibold text-white text-left font-general-sans mx-auto">
          <span className="waving-hand">👋 </span> I'm Faustino
        </p>
        <p className="underline mt-2 font-regular text-gray_gradient hero-tag sm:text-3xl text-2xl w-fit mx-auto rounded-xl p-2">
          {"your next software developer ;) "}
        </p>
      </div>
      <div className="w-full h-full absolute pt-40">
        <Canvas className="w-screen h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={isSmall || isMobile || isTablet ? 0.05 : 0.075}
                position={[0, 0, 0]}
                rotation={[0.2, -Math.PI, 0]}
              />
              <Stars
                factor={4}
                radius={10}
                saturation={0}
                count={1000}
                fade
                speed={0.9}
              />

              <ReactLogo position={sizes.reactLogoPosition} />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <Cube position={sizes.cubePosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
