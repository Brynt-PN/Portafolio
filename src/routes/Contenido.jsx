import '../styles/Contenido.css';

// REACT ROUTE -------------------------------
import { useParams } from 'react-router-dom';

// JSON --------------------------------------
import data from "../json/Perfil.json";

function Contenido(){

    const params = useParams();
    const datos = data;
    const contenido = datos[params.proyectId][params.contenId];

    return(
        <div className="box-funciona">
            {
                contenido.map((block) => 
                    <>
                        <div className='box-funciona-texto'>
                            <p>{block.text}</p>
                        </div>
                        <div className='box-funciona-img'>
                            {block.imgFunciona ? <img src={require(`../img/${block.imgFunciona}`)}/>:''}
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Contenido;