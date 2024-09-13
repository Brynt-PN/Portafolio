import '../styles/Root.css';

// COMPONENTS ---------------------------------------------
import Usuario from '../components/Usuario';
import Grupo from '../components/Grupo';
import Opcion from '../components/Opcion';

// ICONS --------------------------------------------------
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


function Root(){
    return (
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
                    listElements={[
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Simulador de Caja'
                            isRRSS={false}
                            imgName='Brayant.jpg'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Route Maker'
                            isRRSS={false}
                            imgName='Brayant.jpg'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Multi link'
                            isRRSS={false}
                            imgName='Brayant.jpg'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Apex Demo'
                            isRRSS={false}
                            imgName='Brayant.jpg'
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
                        />,
                        <Opcion
                            ico={<FaLinkedin />}
                            nameOp='Linkedin'
                            isRRSS={true}
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='WhatsApp'
                            isRRSS={true}
                        />,
                        <Opcion
                            ico={<BiLogoGmail />}
                            nameOp='Gmail'
                            isRRSS={true}
                        />,
                    ]}
                />
            </div>
            <div id='box-area-3' className='box-conten'>
                Lorem
            </div>
            <div id='box-area-4' className='box-conten'>
                Lorem
            </div>
        </div>
    );
}

export default Root;