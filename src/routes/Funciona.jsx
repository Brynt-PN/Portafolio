import '../styles/Funciona.css';

function Funciona({ text, imgFunciona }){
    return(
        <div className="box-funciona">
            <div className='box-funciona-texto'>
                <p>{text}</p>
            </div>
            <div className='box-funciona-img'>
                <img src={require(`../img/${imgFunciona}`)}/>
            </div>
            <div className='box-funciona-texto'>
                <p>{text}</p>
            </div>
            <div className='box-funciona-img'>
                <img src={require(`../img/${imgFunciona}`)}/>
            </div>
        </div>
    );
}

export default Funciona;