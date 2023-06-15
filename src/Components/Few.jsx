import React from 'react'
import squat from '../images/squat.png'
import foto from '../images/Foto.png'
import { color } from 'framer-motion'

const Few = () =>{


    return(
        <div id='mid'>
        
        <div className='a-container items-center' style={{marginTop: '100px', alignContent: 'center', flexDirection: 'row'}}>
            
              <div className='a-img'>
                <img src={squat} alt='squat'/>
              </div>
            
            
              <div style={{flexDirection: 'column'}}>
                <h1 style={{fontFamily: 'FutureTense'}}>MAS A VERDADE É QUE ESSE PROJETO <span style={{color:'#DAED33'}}>NÃO É PARA TODO MUNDO...</span></h1>
                <p style={{fontSize: '1rem'}}>Os treinos são feitos de forma personalizada e periodizada. Seja para perda de peso, definição ou ganho de massa muscular. Após analisar a situação atual do seu corpo e entender quais são seus objetivos, vou alinhar isso a realidade de tempo disponível na sua rotina.</p>
                <span>Acima de tudo, você irá aprender a treinar de verdade!</span>
                <p style={{fontSize: '1rem'}}>Chega de ficar perdido na academia, com medo de estar executando errado e sem saber direito para o que serve o que você está fazendo.</p>
                <p style={{fontSize: '1rem'}}>Agora você irá treinar como gente grande, progredir carga e de quebra ser admirado por todos a sua volta. A cada 8 semanas você subirá de nível, até atingir sua melhor versão.</p>
                <div className='header-btns'>
                <a href='#' className='header-btn' style={{width: '400px'}}>É DISSO QUE EU PRECISO, QUERO CONHECER!</a>
                </div>
              </div>
        </div>
      </div>
    )
}

export default Few