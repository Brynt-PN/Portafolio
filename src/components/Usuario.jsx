import '../styles/Usuario.css';

function Usuario({ user, isOderUser, imgName }){
    return(
        <div className='box-user'>
            <div id='box-img'>
                <img 
                    src={isOderUser ? require(`../img/${imgName}`) : require(`../img/${user}.jpg`)} 
                    alt="Foto de Perfil"
                />
            </div>
            <div id='box-name'>
                <h2 className={isOderUser? 'titulo-usuario' : 'titulo-principal'}>{user}</h2>
            </div>
        </div>
    );
}

export default Usuario;