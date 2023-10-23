
import FadeIn from "./shared/fadeIn";
import hospitalfront from "/hospitalFront.jpeg"


const About = () => {

    const hospitalName = "My Hospital";
    const mdName = "Dr. John Doe";

    return ( <>
    <div
      className="flex flex-col items-center justify-center my-10 pt-20"
    > 

    <div className="flex px-10 ">
        <div className="w-2/4">
            <FadeIn delay={0.2} direction="down">

                <img
                    src={hospitalfront}
                    alt={hospitalName}
                    
                    className="rounded-lg"
                />


            </FadeIn >

        </div>
           

            <div
            className="text-center leading-7 text-xl text-gray-600 w-2/4"
             >
                <h2
                    className="text-center text-3xl font-bold mb-5"
                >
                    {hospitalName}
                </h2>
                <FadeIn delay={0.2} direction="left">
                    <p>
                    {hospitalName} is a leading healthcare provider in the region. 
                    We offer a wide range of services, including primary care, 
                    specialty care, and emergency care. Our team of experienced 
                    and compassionate professionals is dedicated to providing our 
                    patients with the best possible care.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} direction="right">
                    <p>
                    We are committed to providing our patients with the highest 
                    quality healthcare in a safe and compassionate environment. 
                    We use the latest technology and treatments to provide our 
                    patients with the best possible care.
                    </p>
                </FadeIn>
                
       
            </div>


    </div>

        
     
      <h3
        className="text-center text-2xl font-bold mt-5"
      >
        Our Medical Director
      </h3>
      <div
        
        className="text-center leading-7 text-xl text-gray-600"
      >
        <FadeIn delay={0.2} direction="right">
            <p>
            Our Medical Director, Dr. John Doe, is a board-certified physician 
            with over 20 years of experience. He is a highly respected leader 
            in the healthcare community and is known for his commitment to 
            providing his patients with the highest quality care.
            </p>
        </FadeIn>
        <FadeIn delay={0.2} direction="right">
            <p>
            Dr. Doe is a graduate of Harvard Medical School and completed 
            his residency at the Mayo Clinic. He is a member of the American 
            Medical Association and the American Academy of Pediatrics. 
            He is also a Fellow of the American College of Physicians.
            </p>
        </FadeIn>
        
        
      </div>
    </div>

    
    </> );
}
 
export default About;