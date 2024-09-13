import '../styles/Grupo.css';


function Grupo({ tituloGrupo, listElements }){
    return (
        <div className='box-grupo'>
            <h2>{tituloGrupo}</h2>
            {
                listElements.map((element) =>
                    element
                )
            }
        </div>
    );
}

export default Grupo;