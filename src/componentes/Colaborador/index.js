import './Colaborador.css'
                    //desestruturação de objeto para passar
const Colaborador = ({img,nome,cargo, corDeFundo}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }} >
                <img src={`${img}.png`} alt={nome} />
            </div>
            <div className='rodape' >
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;