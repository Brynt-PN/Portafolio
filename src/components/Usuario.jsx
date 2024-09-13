import '../styles/Usuario.css';

function Usuario({ user }){
    return(
        <div className='box-user'>
            <div id='box-img'>
                <img src={require(`../img/${user}.jpg`)} alt="Foto de Perfil" />
            </div>
            <div id='box-name'>
                <h2 className='titulo-principal'>{user}</h2>
            </div>
        </div>
    );
}

export default Usuario;