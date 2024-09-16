import '../styles/Usuario.css';

// REACT ROUTE -------------------------------
import { Link } from 'react-router-dom';

function Usuario({ user, isOderUser, imgName, route }){
    return(
        <Link 
        className='box-user'
        to={isOderUser ? route : '/'}
        >
            <div id='box-img'>
                <img 
                    src={isOderUser ? require(`../img/${imgName}`) : require(`../img/${user}.jpg`)} 
                    alt="Foto de Perfil"
                />
            </div>
            <div id='box-name'>
                <h2 className={isOderUser? 'titulo-usuario' : 'titulo-principal'}>{user}</h2>
            </div>
        </Link>
    );
}

export default Usuario;