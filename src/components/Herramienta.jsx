import '../styles/Herramienta.css'

function Herramienta({ ico, titulo, porcentaje, text }){
    return(
        <div className="box-herramienta">
            <div className='box-herramienta-titulo'>
                {ico}
                <h3>{titulo}</h3>
                <p>{porcentaje}</p>
            </div>
            <div className='box-herramienta-descrip'>
                <p>{text}</p>
            </div>
            <div className='box-herramienta-titulo'>
                {ico}
                <h3>{titulo}</h3>
                <p>{porcentaje}</p>
            </div>
            <div className='box-herramienta-descrip'>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Herramienta;