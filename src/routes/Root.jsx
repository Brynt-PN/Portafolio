import '../styles/Root.css';

// COMPONENTS ---------------------------------------------
import Usuario from '../components/Usuario';
import Grupo from '../components/Grupo';
import Opcion from '../components/Opcion';
import CardConten from '../components/CardConten';

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
                            imgName='simuladorBancario.svg'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Route Maker'
                            isRRSS={false}
                            imgName='routeMaker.svg'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Multi link'
                            isRRSS={false}
                            imgName='multilink.ico'
                        />,
                        <Opcion
                            ico={<IoLogoWhatsapp />}
                            nameOp='Apex Demo'
                            isRRSS={false}
                            imgName='apexDemo.png'
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
                <CardConten
                user={<Usuario 
                    user='Brayant'    
                />}
                date='15 Sep 2024'
                text='Mi primer post de Portafolio, estoy Orgulloso'
                img='post1.jpg'
                />
                <CardConten
                user={<Usuario 
                    user='Brayant'    
                />}
                date='15 Sep 2024'
                text='Una fotito mas actual de como soy ahora'
                img='post2.jpg'
                />
                <CardConten
                user={<Usuario 
                    user='Brayant'    
                />}
                date='15 Sep 2024'
                text='Un vistaso a la primera versión del portafolio'
                img='post3.jpg'
                />
                <CardConten
                user={<Usuario
                    isOderUser={true}
                    user='Route Maker'
                    imgName='routeMaker.svg'    
                />}
                date='15 Sep 2024'
                text='Recuerdo la primera ruta que calcule oficialmente cuando lance Route Maker'
                img='post4.png'
                />
                <CardConten
                user={<Usuario
                    isOderUser={true}
                    user='Route Maker'
                    imgName='routeMaker.svg'    
                />}
                date='15 Sep 2024'
                text='Un poco del código que calculaba las rutas con latitud y longitud en Python con la Api de Google Maps'
                img='post5.png'
                />
                <CardConten
                user={<Usuario
                    isOderUser={true}
                    user='Route Maker'
                    imgName='routeMaker.svg'    
                />}
                date='15 Sep 2024'
                text='Asi manejaba las navegación en Route Maker, ah pasado tanto desde mi primer proyecto'
                img='post6.png'
                />
            </div>
            <div id='box-area-4' className='box-conten'>
                Lorem
            </div>
        </div>
    );
}

export default Root;