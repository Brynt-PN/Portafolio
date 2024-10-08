import '../styles/Root.css';

import PostData from "../json/Post.json";

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

    const listPost = PostData.postList;

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
                {
                    listPost.map((post) =>
                        <CardConten
                            user={<Usuario
                                isOderUser={post.isOderUser}
                                user={post.user}
                                imgName={post.imgName}   
                            />}
                            date={post.date}
                            text={post.text}
                            img={post.img}
                            route={post.route}
                        />
                    )
                }
            </div>
            <div id='box-area-4' className='box-conten'>
                Lorem
            </div>
        </div>
    );
}

export default Root;