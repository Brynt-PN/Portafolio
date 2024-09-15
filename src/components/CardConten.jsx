import '../styles/CardConten.css';

// Components ---------------------------
import Usuario from './Usuario';
import { Link } from 'react-router-dom';

function CardConten({ user, date, text, img, route }){
    return(
        <div className="box-card">
            <div className='box-card-user'>
                <Usuario
                user={user}
                />
                <div className='box-user-date'>
                    <p>{date}</p>
                </div>
            </div>
            <div className='box-card-description'>
                <p>{text}</p>
            </div>
            <div className='box-card-img'>
                <img src={require(`../img/${img}`)}/>
            </div>
            <div className='box-card-boton'>
                <Link to={route} style={{ textDecoration: 'none' }} className='box-boton-link'>
                    + Mas
                </Link>
            </div>
        </div>
    );
}

export default CardConten;