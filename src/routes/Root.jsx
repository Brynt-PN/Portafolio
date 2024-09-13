import '../styles/Root.css';

// COMPONENTS ---------------------------------------------
import Usuario from '../components/Usuario';
import Grupo from '../components/Grupo';

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