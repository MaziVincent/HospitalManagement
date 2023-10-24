
import FadeIn from "./shared/fadeIn";
import family from "../assets/images/public-health.png";
import ovum from "../assets/images/ovum.png";
import womb from "../assets/images/womb.png";


const Services = () => {

    const services = [
        {title:'Consultancy in Obstetrics and Gynaecology', 
        subtitle:'Something about safe delivery',
        icon:womb},
        {title:'Family Planning and Counseling', 
        subtitle:'Something about safe delivery',
        icon:family},
        {title:'Fertility management',
        subtitle:'Something about safe delivery',
        icon:ovum},
        {title:'Genital Cancer Screening',
        subtitle:'Something about safe delivery',
        icon:ovum},
        {title:'Ultrasound Scanning',
        subtitle:'Something about safe delivery',
        icon:ovum},
        {title:'Laboratory Services',
        subtitle:'Something about safe delivery',
        icon:ovum},
    ]
    return ( <>

<section className="bg-gray-100 text-white pt-28 pb-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Our Services</h2>
        <div className="flex flex-wrap -mx-4 px-5">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 flex items-center">
                <div className="mr-4 text-4xl text-blue-900"><img src={service.icon} alt='' className="max-w-[180px]" /></div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
    </> );
}
 
export default Services;