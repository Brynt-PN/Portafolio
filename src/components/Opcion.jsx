import '../styles/Opcion.css';

// React Route -------------------------------------
import { Link } from "react-router-dom";


function Opcion({ ico, nameOp, isRRSS, imgName, route }){
    return(
        <Link to={route} style={{ textDecoration: 'none' }} target={isRRSS ? '_blanck' : ''}>
            <div className='box-opcion'>
                <div className={isRRSS ? 'box-op-ico' : 'box-op-img'}>
                    {isRRSS ? ico : <img 
                                        src={require(`../img/${imgName}`)}
                                        className='img-op'
                                    />
                    }
                </div>
                <div className='box-op-text'>
                    {nameOp}
                </div>
            </div>
        </Link>
    );
}

export default Opcion;