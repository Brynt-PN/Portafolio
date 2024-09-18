import '../styles/Herramienta.css';

import { icos } from '../js/data';


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