import React from 'react'
import squat from '../images/squat.png'
import FotoFew from '../images/FotoFew(1).png'
import { color } from 'framer-motion'

const Few = () =>{


    return(
      <div>
        <div id='mid'>  
          <div className='a-container items-center' style={{marginTop: '100px' , flexDirection: 'row'}}>
              
                <div className='a-img justify-center'>
                  <img src={FotoFew} style={{opacity:'60%'}}/>
                </div>
              
              
                <div style={{flexDirection: 'column'}}>
                  <h1 style={{fontFamily: 'FutureTense'}}>MAS A VERDADE É QUE ESSE PROJETO <span style={{color:'#DAED33'}}>NÃO É PARA TODO MUNDO...</span></h1>
                  <p style={{fontSize: '1.2rem'}}>
                    <span style={{fontWeight: 'bold'}}>
                      Quer emagrecer, mas tem dúvidas se consegue mesmo… &nbsp;
                    </span>
                  Porque dentro do projeto toda a insegurança e medo sumirão.
                  Você transformará sua mente e corpo.
                  </p>

                  <p style={{fontSize: '1.2rem'}}>
                    <span style={{fontWeight: 'bold'}}>
                      Quer de uma vez por todas começar e continuar
                    </span>
                    , sem viver aquele famoso efeito sanfona.
                  </p>

                  <p style={{fontSize: '1.2rem'}}>
                    <span style={{fontWeight: 'bold'}}>
                      Quer um método comprovado para seguir
                    </span>
                    , ao invés de fazer os treinos genéricos da academia, ou seguir as “receitinhas” de internet.
                  </p>

                  <p style={{fontSize: '1.2rem'}}>
                    <span style={{fontWeight: 'bold'}}>
                      Quer um Personal que te motive de verdade
                    </span>
                      , que acredite que você é capaz de conseguir essa mudança.
                  </p>
                </div>
          </div>
          <div className='pt-8'>
            <h1 style={{fontWeight: 'bold'}}>
              Quer olhar nos olhos das pessoas que ama e encontrar ADMIRAÇÃO
            </h1>
          </div>
            <div className='header-btns'>
              <a href='#' className='header-btn' style={{width: '300px'}}>ESTOU COMPROMETIDO</a>
            </div>
        </div>

      </div>
    )
}

export default Few