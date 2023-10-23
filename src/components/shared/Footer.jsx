


const Footer = () => {

    return ( 
    <div className="bg-[linear-gradient(133deg,_#566270_0%,_#283444_100%)] rounded-t-xl">
    <div className="max-w-[1490px] mx-auto px-10 py-[120px]">
      <div className="flex flex-col items-center xl:items-start xl:flex-row xl:justify-between gap-12">
        <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
          <h2 className="text-white text-center xl:text-start font-medium text-3xl lg:text-[32px]">
            Newsletter
          </h2>
          <div className="relative w-full xs:w-[380px] xl:w-[320px] mt-11">
            <input
              type="text"
              placeholder="Email"
              className="rounded-full w-full pl-6 pr-[140px] py-4 bg-primary outline-none text-white text-base
                xs:text-lg placeholder-white"
            />
            <div
              className="absolute top-2/4 -translate-y-2/4 right-3 bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] px-6 py-2.5 rounded-full
              cursor-pointer text-white"
            >
              Subscribe
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 w-full">
          <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
            
              <div
                className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
              >
                <h6 className="mb-8 text-2xl lg:text-3xl font-bold text-center xl:text-start">
                  Support
                </h6>
                <ul className="flex flex-col gap-4">
                  
                    <div
                      className="w-full flex mx-auto justify-center xl:justify-start"
                    >
                      <li className="font-medium text-lg md:text-lg cursor-pointer text-center xl:text-start w-fit">
                        About
                      </li>
                    </div>
                    <div
                      className="w-full flex mx-auto justify-center xl:justify-start"
                    >
                      <li className="font-medium text-lg md:text-lg cursor-pointer text-center xl:text-start w-fit">
                        Contacts
                      </li>
                    </div>
                    <div
                      className="w-full flex mx-auto justify-center xl:justify-start"
                    >
                      <li className="font-medium text-lg md:text-lg cursor-pointer text-center xl:text-start w-fit">
                        Services
                      </li>
                    </div>
                  
                </ul>
              </div>
            
          </div>

          <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
            
              <div
                className="text-white max-w-screen md:max-w-[340px] flex-1 md:flex-auto"
              >
                <h6 className="mb-8 text-2xl lg:text-3xl font-bold text-center xl:text-start">
                  Reach Out
                </h6>
                <ul className="flex flex-col gap-4">
                 
                    <div
                      className="w-full flex mx-auto justify-center xl:justify-start"
                    >
                      <li
                        className={`font-medium text-lg cursor-pointer
                        text-center xl:text-start w-fit`}
                      >
                        NO. 12 Some Street Addree
                      </li>
                    </div>
                    <div
                      className="w-full flex mx-auto justify-center xl:justify-start"
                    >
                      <li
                        className={`font-medium text-lg cursor-pointer
                        text-center xl:text-start w-fit`}
                      >
                        0803Something
                      </li>
                    </div>
                    <div
                      className="w-full flex mx-auto justify-center xl:justify-start"
                    >
                      <li
                        className={`font-medium text-lg cursor-pointer
                        text-center xl:text-start w-fit`}
                      >
                        SomeEmail@something.com
                      </li>
                    </div>
                  
                </ul>
              </div>
            
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white my-12" />

      <h6 className="text-white text-center text-base lg:text-lg">
        &copy; Listacc - All rights reserved
      </h6>
    </div>
  </div> );
}
 
export default Footer;