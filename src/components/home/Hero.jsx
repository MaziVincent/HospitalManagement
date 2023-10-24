import FadeIn from "../shared/fadeIn";
import stetoscope from ".../assets/images/stethoscope-copy-space.jpg"

const Hero = () => {
  return (
    <>
      <div
        className="h-screen relative flex flex-col items-center pt-40 "
        style={{
          background: `url(${stetoscope})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        
        <FadeIn
          delay={0.2}
          direction="down"
          padding
          fullWidth
        >
          <h1 className="mt-[90px] text-center text-5xl lg:text-7xl leading-tight xs:text-[64px] text-white max-w-[1050px] font-extrabold">
          Nurturing Health and Inspiring Hope, Your Health is our Business
          </h1>
        </FadeIn>
        <FadeIn
          delay={0.4}
          direction="down"
          padding
          fullWidth
        >
          <h5 className="mt-6 text-center text-lg lg:text-xl xs:text-xl text-white max-w-[500px]">
          Compassionate Care, Expertise, and Hope. Experience Unrivaled Care at Fatima Specialist Hospital
          </h5>
        </FadeIn>
      </div>
    </>
  );
};

export default Hero;
