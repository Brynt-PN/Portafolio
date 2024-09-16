import '../styles/Grupo.css';

// REACT ROUTE -------------------------------
import { Link } from 'react-router-dom';


function Grupo({ tituloGrupo, listElements, route }){
    return (
        <div className='box-grupo'>
            <Link to={route} className='box-grupo-titulo'>{tituloGrupo}</Link>
            {
                listElements.map((element) =>
                    element
                )
            }
        </div>
    );
}

export default Grupo;