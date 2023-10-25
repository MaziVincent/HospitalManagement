
import FadeIn from "../shared/fadeIn";
import hospitalFront from "../../assets/images/hospitalFront.jpeg"

const Environment = () => {
    return ( 

    <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center after:content-[''] after:block after:w-14 after:border-4 after:border-red-500">
          Our Beautiful Environment
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
        Where Rest Meets Luxury – Experience Unparalleled Comfort and Serenity in Our Environment
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <img src={hospitalFront} alt="" className="rounded-3xl shadow-lg" />
            <img src={hospitalFront} alt="" className="rounded-3xl shadow-lg" />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div>
            <img src={hospitalFront} alt="" className="rounded-3xl shadow-lg" />
          </div>
        </FadeIn>
      </div>
    </div>
     );
}
 
export default Environment;