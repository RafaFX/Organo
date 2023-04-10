import './Rodape.css'

const Rodape = () => {


    return(
        
        <footer className='footer' >
            <div className='redes-sociais'>
                <img src='/imagens/fb.png' alt='Facebook Logo' />
                <img src='/imagens/tw.png' alt='Twitter Logo'/>
                <img src='/imagens/ig.png' alt='Instagram Logo'/>
            </div>

            <div className='organo' >
                <img src='/imagens/logo.png' alt='Organo Logo' />
            </div>

            <div className='desenvolvido' >
                <label>Desenvolvido por Alura.</label>
            </div>
        </footer>

    )

}

export default Rodape;