
import FadeIn from "../shared/fadeIn";
import holdingStet from ".../assets/images/holding-stethoscope.jpg"
import laboratory from ".../assets/images/laboratory.png"
import power from ".../assets/images/powersupply.png"
import ultrasound from ".../assets/images/ultrasound.png"
import ward from ".../assets/images/ward.png"

const createRoot = () => {

        const services = [
            {title:'Ultra Mordern Laboratory', 
            subtitle:'Something about safe delivery Something about safe delivery Something about safe delivery',
            icon:laboratory},
            {title:'UltraSound Machine', 
            subtitle:'Something about safe delivery,Something about safe delivery Something about safe delivery',
            icon:ultrasound},
            {title:'En-Suite Wards', 
            subtitle:'Something about safe delivery Something about safe delivery Something about safe delivery',
            icon:ward},
            {title:'24 Hours Power Supply', 
            subtitle:'Something about safe delivery Something about safe delivery Something about safe delivery',
            icon:power},
        ]

    return ( 

        <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          Fatime Hospital Core Values
        </h1>
      </FadeIn>

      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12">
          These are the core values we stand for
        </h5>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-8 w-full justify-around ">
        <div className="flex flex-col gap-8 lg:gap-14 items-center lg:w-2/4">
          {services.map((item, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.2} direction="left">
              <div className="flex flex-row xs:flex-row gap-6 items-start xs:items-start shadow p-2 ">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-[88px] w-[68px]"
                />
                <div>
                  <h3 className=" xs:text-start mb-2 text-2xl lg:text-[28px] text-gray-700 font-medium">
                    {item.title}
                  </h3>
                  <h6 className=" xs:text-start text-base lg:text-lg text-gray-500 font-medium w-full">
                    {item.subtitle}
                  </h6>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="lg:w-2/4">
            <FadeIn delay={0.6} direction="right">
              
              <img src={holdingStet} alt="plants" className=" w-full rounded-xl shadow-xl " />
              
            </FadeIn> 
          </div>
      </div>
    </div>
     );
}
 
export default createRoot;