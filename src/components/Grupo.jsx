import '../styles/Grupo.css';

// Components ---------------------------------------------
import Opcion from './Opcion';

function Grupo({ tituloGrupo }){
    return (
        <div className='box-grupo'>
            <h2>{tituloGrupo}</h2>
            <ul>
                <li>Soy un elemento</li>
                <li>
                    <Opcion
                    
                    />
                </li>
            </ul>
        </div>
    );
}

export default Grupo;