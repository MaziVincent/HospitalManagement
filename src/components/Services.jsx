
import FadeIn from "./shared/fadeIn";
import family from "../assets/images/public-health.png";
import ovum from "../assets/images/ovum.png";
import womb from "../assets/images/womb.png";
import screening from "../assets/images/pap-smear.png";
import ultrasound from "../assets/images/ultrasound1.png";
import laboratory from "../assets/images/centrifuge.png";


const Services = () => {

    const services = [
        {title:'Consultancy in Obstetrics and Gynaecology', 
        subtitle:"Guiding Your Journey to Women's Wellness and Health Excellence in Obstetrics and Gynaecology.",
        icon:womb},
        {title:'Family Planning and Counseling', 
        subtitle:"Empowering Your Family's Future with Expert Guidance in Family Planning and Consultancy.",
        icon:family},
        {title:'Fertility management',
        subtitle:'Nurturing Hope, One Family at a Time, Through Advanced Fertility Management.',
        icon:ovum},
        {title:'Genital Cancer Screening',
        subtitle:'Guarding Your Health, One Test at a Time. Discover Peace of Mind Through Our Comprehensive Genital Cancer Screening.',
        icon:screening},
        {title:'Ultrasound Scanning',
        subtitle:"Unveiling Life's Miracles: Our Advanced Ultrasound Machine Paints a Vivid Picture of Health and Happiness.",
        icon:ultrasound},
        {title:'Laboratory Services',
        subtitle:'Where Cutting-Edge Technology Meets Care – Discover the Future of Healthcare in Our Ultra-Modern Laboratory.',
        icon:laboratory},
    ]
    return ( <>

<section className="bg-gray-100 text-white pt-28 pb-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-gray-700">Our Services</h2>
        <div className="flex flex-wrap -mx-4 px-5">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
                <FadeIn  delay={0.2} direction="down">
                <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 flex items-center">
                    <div className="mr-4 text-4xl text-blue-900"><img src={service.icon} alt=''  /></div>
                    <div>
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p>{service.subtitle}</p>
                    </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
   
    </> );
}
 
export default Services;