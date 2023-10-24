
import FadeIn from "../shared/fadeIn";
import innovation1 from '.../assets/images/innovation1.png';
import integrity3 from '.../assets/images/integrity3.png';
import patient1 from '.../assets/images/patient1.png';

const ServicesList = () => {
    
    const coreValues = [
        {title:'Patient-Centered Care', 
        subtitle:'Putting YOU at the heart of every decision, because your well-being is our priority.',
        icon:patient1},
        {title:'Integrity', 
        subtitle:'We uphold the highest standards of integrity in every step of your health journey.',
        icon:integrity3},
        {title:'Innovation', 
        subtitle:'Pioneering breakthroughs that redefine what is possible for your health and happiness.',
        icon:innovation1},
        // {title:'Honesty', 
        // subtitle:'Delivering transparent and honest care, so you can trust in your path to well-being.',
        // icon:mother},

        
    ]
    return ( <>
    
    <div
      id="services"
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col justify-center md:flex-row xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full"
    >
      {coreValues.map((service, i) => (
        <FadeIn key={i} delay={0.2} direction="down">
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
            <img
              src={service.icon}
              className="max-h-[84px] max-w-[84px]"
              alt=""
            />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium text-gray-700">
                {service.title}
              </h3>
              <h6 className=" text-justify lg:text-start text-base lg:text-lg text-fontGray font-medium text-gray-500 ">
                {service.subtitle}
              </h6>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
    
    
    </> );
}
 
export default ServicesList;