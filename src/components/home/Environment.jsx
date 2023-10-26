
import FadeIn from "../shared/fadeIn";
import hospitalFront from "../../assets/images/hospitalFront.jpeg"
import hospitallab from "../../assets/images/nobody-scientific.jpg"
import theater from "../../assets/images/interior-view.jpg"
import nurse from "../../assets/images/nurse-scrubs.jpg"
import stet from "../../assets/images/stethoscope-space.jpg"
import ImageSlider from "../shared/imageSlider";

const Environment = () => {
  const slides = [
    { url: theater, title: "beach" },
    { url: hospitallab, title: "boat" },
    { url: nurse, title: "forest" },
   
  ];
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

      <div className="w-full h-[30rem] my-0 mx-auto">
        <ImageSlider slides={slides} />
      </div>

      {/* <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <img src={hospitallab} alt="" className="rounded-3xl shadow-lg" />
            <img src={hospitalFront} alt="" className="rounded-3xl shadow-lg" />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div>
            <img src={hospitalFront} alt="" className="rounded-3xl shadow-lg" />
          </div>
        </FadeIn>
      </div> */}
    </div>
     );
}
 
export default Environment;