import '../styles/CardProyect.css';

// REACT ROUTE -------------------------------
import { Link } from 'react-router-dom';

function CardProyect({ route, imgCard, imgUser, user, text, listIco }){
    return(
        <Link 
        className="box-cardProyect"
        to={route}
        >
            <div className='box-cardProyect-img'>
                <img src={require(`../img/${imgCard}`)}/>
            </div>
            <div className='box-cardProyect-perfilImg'>
                <img src={require(`../img/${imgUser}`)}/>
            </div>
            <div className='box-cardProyect-name'>
                <h2>{user}</h2>
            </div>
            <div className='box-cardProyect-text'>
                <p>{text}</p>
            </div>
            <div className='box-cardProyect-ico'>
                {
                    listIco.map((ico) =>
                        <div className='cardProyect-ico'>
                            {ico}
                        </div>
                    )
                }
            </div>
        </Link>
    );
}

export default CardProyect;