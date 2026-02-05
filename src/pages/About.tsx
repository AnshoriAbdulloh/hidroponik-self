import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LuSmilePlus } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

export default function About() {
  return (
    <section
      id='About'
      className={`w-full grid place-items-center bg-black py-6 mt-5 text-white text-lg`}
    >
      <div className={`px-6 lg:max-w-5xl md:max-w-3xl w-full`}>
        <div className={``}>
          <LuSmilePlus className={`inline mr-2`} size={25} />
          Lets make something <span className={`text-[#84bd22]`}>
            Grow
          </span>{" "}
          with <span className={`text-[#84bd22]`}>Hidroponik</span>
        </div>
        <hr className={`my-6`} />
        <div className={`flex flex-wrap gap-4 justify-between *:mb-4`}>
          <div
            className={`flex flex-col text-[15px] *:mb-3 [&_span_svg]:inline [&_span_svg]:mr-2`}
          >
            <h1 className={`mb-2 text-lg`}>Contact Us</h1>
            <span>
              <IoMailOutline size={20} /> ahonk.hidroponik@gmail.com
            </span>
            <span>
              <FaWhatsapp size={20} /> +621 789 987 654
            </span>
            <span>
              <MdOutlinePhone size={20} /> +621 223 455 432
            </span>
          </div>
          <div>
            <div
              className={`flex flex-col text-[15px] *:mb-3 [&_span_svg]:inline [&_span_svg]:mr-2`}
            >
              <h1 className={`mb-2 text-lg`}>Follow Us</h1>
              <span>
                <FaGithub size={20} />
                <a href='https://github.com/AnshoriAbdulloh'>AnshoriAbdulloh</a>
              </span>
              <span>
                <FaLinkedinIn size={20} />
                <a href='https://github.com/AnshoriAbdulloh'>AnshoriAbdulloh</a>
              </span>
              <span>
                <FaInstagram size={20} /> anshori_abd
              </span>
              <span>
                <FaFacebook size={20} /> ahonk
              </span>
            </div>
          </div>
          <div>
            <div
              className={`flex flex-col text-[15px] *:mb-3 [&_span_svg]:inline [&_span_svg]:mr-2`}
            >
              <h1 className={`mb-2 text-lg`}>Addresses</h1>
              <span>
                <SiGooglemaps size={20} />{" "}
                <a href='https://www.google.com/maps/place/Jakarta,+Daerah+Khusus+Ibukota+Jakarta/@-6.2297465,106.829518,11z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3e945e34b9d:0x5371bf0fdad786a2!8m2!3d-6.1944491!4d106.8229198!16zL20vMDQ0cnY?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D'>
                  Jakarta Jl.Panglima Sudirman
                </a>
              </span>
              <span>
                <SiGooglemaps size={20} />{" "}
                <a href='https://www.google.com/maps/place/Surabaya,+Jawa+Timur/@-7.2754417,112.6302809,12z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fbf8381ac47f:0x3027a76e352be40!8m2!3d-7.2574719!4d112.7520883!16zL20vMDFmNHhk?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D'>
                  Surabaya Jl.Panglima Sudirman
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
