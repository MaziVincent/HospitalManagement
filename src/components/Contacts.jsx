import { EmailRounded, PhoneIphone, LocationCity } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import FadeIn from "./shared/fadeIn";


const Contacts = () => {
    return ( <>
    
                    <div className="bg-gray-100 pt-28 pb-12 px-6">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-semibold mb-8 after:content-[''] after:block after:w-10 after:border-2 after:border-red-500">Contact Us</h2>
                        <p className="text-base text-gray-600">Don't Hesitate, Connect Today! Reach Out to Us and Let Your Health Journey Begin.
                            <br/>.Your Wellness Starts with a Conversation. Get in Touch – We're Here to Listen and Help.</p>
                        <FadeIn delay={0.2} direction="left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                            
                                <div>
                                    
                                    <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                                    
                                    <p className="mb-4"><LocationCity sx={{color:blue[400]}} /> No. 1 Stephen Mgbabor Road, Amike-Aba, Abakaliki, Ebonyi State, Nigeria</p>
                                    <p className="mb-4"><PhoneIphone sx={{color:blue[400]}}/> +2348037407645</p>
                                    <p className="mb-4"><EmailRounded sx={{color:blue[400]}}/> fatimahospital2018@gmail.com</p>
                                    
                                </div>
                            
                                <div>
                            
                                    <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
                                    <form>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700">Name:</label>
                                        <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                                        <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block text-gray-700">Message:</label>
                                        <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded-md" />
                                    </div>
                                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                                    </form>
                                </div>
                            
                            </div>
                        </FadeIn>
                    </div>
                </div>
    
    
    </> );
}
 
export default Contacts;