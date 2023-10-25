
import FadeIn from "./shared/fadeIn";
import hospitalfront from "../assets/images/hospitalFront.jpeg"


const About = () => {

    const hospitalName = "My Hospital";
    const mdName = "Dr. John Doe";

    return ( <>

  <div className="bg-gray-100 py-12 pt-28">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/path-to-hospital-image.jpg"
            alt="[Hospital Name]"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold mb-8 after:content-[''] after:block after:w-10 after:border-2 after:border-red-500 ">About Us</h2>
          <h3 className="text-2xl font-semibold mb-4">Our History</h3>
          <p className="mb-4">
            Founded in [Year], [Hospital Name] has been serving our community for [Number] years. We have a rich history of providing quality healthcare services and making a positive impact on the lives of our patients.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="mb-4">
            At [Hospital Name], our mission is to provide compassionate, patient-centered care that promotes the well-being of our patients. We are dedicated to delivering high-quality healthcare services with integrity, innovation, teamwork, and honesty.
          </p>
        </div>
        <div className="w-full mt-8">
          <h2 className="text-4xl font-semibold mb-8 text-center">Meet Our Managing Director</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="w-full md:w-1/4 mb-4">
              <img
                src="/path-to-md-image.jpg"
                alt="Dr. [MD Name]"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="mb-4">
                Dr. [MD Name] is our dedicated Managing Director, leading our hospital with a vision for innovation and a commitment to excellence. With extensive experience in the medical field, Dr. [MD Name] ensures that we continue to provide exceptional care to our patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </> );
}
 
export default About;