import '../styles/PerfilProyecto.css';

// REACT ROUTE -------------------------------
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// COMPONETES --------------------------------
import Herramienta from '../components/Herramienta';

// JSON --------------------------------------
import data from "../json/Perfil.json";


function PerfilProyecto(){

    const params = useParams();
    const conten = data;
    const perfil = conten[params.proyectId];

    return(
        <div className="box-perfilProyecto">
            <div className='box-perfilProyecto-vaner'>
                <img src={require(`../img/${perfil.imgVaner}`)}/>
            </div>
            <div className='box-perfilProyecto-imgPerfil'>
                <img src={require(`../img/${perfil.imgPerfil}`)}/>
            </div>
            <div className='box-perfilProyecto-user'>
                <h2>{perfil.user}</h2>
            </div>
            <div className='box-perfilProyecto-descrip'>
                <p>{perfil.descrip}</p>
            </div>
            <div className='box-perfilProyecto-boton'>
                <Link
                className='perfilProyecto-boton-link'
                to={`/proyecto/${params.proyectId}/fun`}
                >
                    ¿COMO FUNCIONA?
                </Link>
                <Link
                className='perfilProyecto-boton-link'
                to={`/proyecto/${params.proyectId}/cod`}
                >
                    CÓDIGO
                </Link>
                <Link
                className='perfilProyecto-boton-link'
                to={`/proyecto/${params.proyectId}/uso`}
                >
                    USO
                </Link>
            </div>
            <div className='box-perfilProyecto-contenido'>
                <div className='perfilProyecto-contenido-variable'>
                    <Outlet />
                </div>
                <Herramienta 
                    listElement={perfil.tec}
                />
            </div>
        </div>
    );
}

export default PerfilProyecto;