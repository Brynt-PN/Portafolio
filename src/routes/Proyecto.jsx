import '../styles/Proyecto.css';

// REACT ROUTE --------------------------------------------
import { Outlet } from 'react-router-dom';

// COMPONENTS ---------------------------------------------
import Usuario from '../components/Usuario';
import Grupo from '../components/Grupo';
import Opcion from '../components/Opcion';
import CardProyect from '../components/CardProyect';

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


function Proyecto(){
    return(
        <div className='grid-box'>
            <div id='box-area-1' className='box-conten'>
                <div className='nav-col'>
                    <Usuario
                    user='Brayant'
                    />
                </div>
            </div>
            <div id='box-area-2' className='box-conten'>
                <Grupo 
                    tituloGrupo='Proyectos'
                    route='/proyecto'
                    listElements={[
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Simulador de Caja'
                            isRRSS={false}
                            imgName='simuladorBancario.svg'
                            route='/proyecto/simuladorCaja'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Route Maker'
                            isRRSS={false}
                            imgName='routeMaker.svg'
                            route='/proyecto/routeMaker'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Multi link'
                            isRRSS={false}
                            imgName='multilink.ico'
                            route='/proyecto/multiLink'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Apex Demo'
                            isRRSS={false}
                            imgName='apexDemo.png'
                            route='/proyecto/apexDemo'
                        />
                    ]}
                />
                <Grupo 
                    tituloGrupo='Contactos'
                    listElements={[
                        <Opcion
                            ico={<FaGithub />}
                            nameOp='GitHub'
                            isRRSS={true}
                            route='https://github.com/Brynt-PN'
                        />,
                        <Opcion
                            ico={<FaLinkedin />}
                            nameOp='Linkedin'
                            isRRSS={true}
                            route='https://www.linkedin.com/in/brayant-palomino-navarro/'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='WhatsApp'
                            isRRSS={true}
                            route='https://wa.me/qr/TZW2LGG75QZ3J1'
                        />,
                        <Opcion
                            ico={<BiLogoGmail />}
                            nameOp='Gmail'
                            isRRSS={true}
                            route='https://mail.google.com/mail/u/1/#inbox'
                        />,
                    ]}
                />
            </div>
            <div id='box-area-3' className='box-conten'>
                <Outlet />
                <div className='box-proyect-cards'>
                    <CardProyect 
                        user='Route Maker'
                        text='Organiza tus Rutas mas rapido y facil'
                        imgCard='post4.png'
                        imgUser='routeMaker.svg'
                        route='/proyecto/routeMaker'
                        listIco={[
                            <FaPython />,
                            <SiDjango />,
                            <SiGooglemaps />,
                            <FaGithub />
                        ]}
                    />
                    <CardProyect 
                        user='Simulador de Caja'
                        text='Practica el ingreso de operaciones bancarias en caja'
                        imgCard='vanerSimulador.png'
                        imgUser='simuladorBancario.svg'
                        route='/proyecto/simuladorCaja'
                        listIco={[
                            <FaHtml5 />,
                            <FaCss3Alt />,
                            <FaJsSquare />,
                            <FaGithub />
                        ]}
                    />
                    <CardProyect 
                        user='Multi link'
                        text='Todas tus redes sociales en un solo link'
                        imgCard='vanerMultiLink.png'
                        imgUser='multilink.ico'
                        route='/proyecto/multiLink'
                        listIco={[
                            <FaHtml5 />,
                            <FaCss3Alt />,
                            <FaJsSquare />,
                            <FaReact />,
                            <FaGithub />
                        ]}
                    />
                    <CardProyect 
                        user='Apex Demo'
                        text='Una pagina de muestra con tematica de un videojuego'
                        imgCard='vanerApex.png'
                        imgUser='apexDemo.png'
                        route='/proyecto/apexDemo'
                        listIco={[
                            <FaHtml5 />,
                            <FaCss3Alt />
                        ]}
                    />
                </div>
            </div>
            <div id='box-area-4' className='box-conten'>
                Lorem
            </div>
        </div>
    );
}

export default Proyecto;