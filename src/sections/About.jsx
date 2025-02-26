import {
  AdditionalInfo,
  Contact,
  MainInfo,
  Stack,
  Remote,
} from "../components/About";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <MainInfo />
        <Stack />
        <Remote />
        <AdditionalInfo />
        <Contact />
      </div>
    </section>
  );
};

export default About;
