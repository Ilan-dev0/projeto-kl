import React from 'react'
import kaique from '../images/Kaique.png'

const Header = () => {
  return (
    <div id='main'>
      <div className='header-heading'>
        <div className='header-content'>
          <h1 style={{fontFamily: 'Montserrat'}}><span>UM PROJETO PARA</span> <br></br> MUDAR SUA VIDA</h1>
          <p className='details' style={{color: 'white', width:'100%', letterSpacing: '2px'}}>Transforme seu corpo e sua mente, com um <br></br> acompanhamento personalizado. Um <span>Personal Trainer</span> que <br></br> vai além do treino, aqui <span>desistir não é uma opção</span></p>
          <div className='header-btns'>
              <a href='#' className='header-btn'>INICIE SEU PROJETO AGORA</a>
          </div>
        </div>
        
      </div>
      <div className='header-img'>
          <img src={kaique} alt='kaique'/>
        </div>
    </div>
  )
}

export default Header
