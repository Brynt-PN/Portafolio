import '../styles/Herramienta.css'

// ICONS --------------------------------------------------
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const icos = {
    "<FaPython />" : <FaPython />,
    "<IoLogoWhatsapp />" : <IoLogoWhatsapp />,
    "<FaLinkedin />" : <FaLinkedin />,
    "<FaGithub />" : <FaGithub />,
    "<BiLogoGmail />" : <BiLogoGmail />,
    "<SiDjango />" : <SiDjango />,
    "<SiGooglemaps />" : <SiGooglemaps />,
    "<FaHtml5 />" : <FaHtml5 />,
    "<FaCss3Alt />" : <FaCss3Alt />,
    "<FaJsSquare />" : <FaJsSquare />,
    "<FaReact />" : <FaReact />,
    "<FaBootstrap />" : <FaBootstrap />,
    "<FaPython />" : <FaPython />
};

function Herramienta({ listElement }){
    return(
        <div className="box-herramienta">
            {
                listElement.map((element) => 
                    <>
                        <div className='box-herramienta-titulo'>
                            {icos[element.ico]}
                            <h3>{element.titulo}</h3>
                            <p>{element.porcentaje}</p>
                        </div>
                        <div className='box-herramienta-descrip'>
                            <p>{element.text}</p>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Herramienta;