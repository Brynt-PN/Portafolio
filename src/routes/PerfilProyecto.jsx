import '../styles/PerfilProyecto.css';

// REACT ROUTE -------------------------------
import { Link } from 'react-router-dom';

// COMPONETES --------------------------------
import Herramienta from '../components/Herramienta';
import Funciona from './Funciona';

// ICO ---------------------------------------
import { FaPython } from "react-icons/fa";

function PerfilProyecto({ imgVaner, imgPerfil, user, descrip }){
    return(
        <div className="box-perfilProyecto">
            <div className='box-perfilProyecto-vaner'>
                <img src={require(`../img/${imgVaner}`)}/>
            </div>
            <div className='box-perfilProyecto-imgPerfil'>
                <img src={require(`../img/${imgPerfil}`)}/>
            </div>
            <div className='box-perfilProyecto-user'>
                <h2>{user}</h2>
            </div>
            <div className='box-perfilProyecto-descrip'>
                <p>{descrip}</p>
            </div>
            <div className='box-perfilProyecto-boton'>
                <Link
                className='perfilProyecto-boton-link'
                to={'/'}
                >
                    ¿COMO FUNCIONA?
                </Link>
                <Link
                className='perfilProyecto-boton-link'
                to={'/'}
                >
                    CÓDIGO
                </Link>
                <Link
                className='perfilProyecto-boton-link'
                to={'/'}
                >
                    USO
                </Link>
            </div>
            <div className='box-perfilProyecto-contenido'>
                <div className='perfilProyecto-contenido-variable'>
                    <Funciona 
                        text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, impedit! Non fugiat assumenda dignissimos similique tempore eum magnam nam neque saepe soluta? Quae harum sunt minima nobis voluptate doloribus eveniet?'
                        imgFunciona='post4.png'
                    />
                </div>
                <Herramienta 
                    ico={<FaPython />}
                    titulo='Python'
                    porcentaje='100%'
                    text='Fue usado para crear la API y poder consumir la API de google maps, tambien los algoritmos que calcula fueron hechos con este lenguaje'
                />
            </div>
        </div>
    );
}

export default PerfilProyecto;