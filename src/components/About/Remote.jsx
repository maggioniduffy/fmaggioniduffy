import Globe from "react-globe.gl";
import Button from "../../components/Button";

const N = 20;
const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  ],
}));

const Remote = () => {
  return (
    <div className="col-span-1 xl:row-span-4">
      <div className="grid-container">
        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
          <Globe
            height={326}
            weight={326}
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            arcsData={arcsData}
            arcColor={"color"}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            labelsData={[
              {
                lat: -31,
                lng: -64,
                text: "Greetings from Cordoba!",
                color: "white",
                size: 150,
              },
            ]}
          />
        </div>
        <div>
          <p className="grid-headtext">
            {"Working remotely across most timezones ;)"}
          </p>
          <p className="grid-subtext">Based on Argentina.</p>
          <Button
            isBeam={true}
            name="Contact me"
            containerClass="w-full mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Remote;
