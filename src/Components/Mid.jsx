import React from 'react'
import squat from '../images/squat.png'
import foto from '../images/Foto.png'

const Mid = () => {
  return (
    <div id='mid'>
      <div className='a-container' style={{marginTop: '100px', alignContent: 'right', flexDirection: 'row'}}>
        
        <div style={{flexDirection: 'column'}}>
          <h1 style={{fontFamily: 'FutureTense'}}>TRANSFORMAREMOS <br></br> JUNTOS ESSE PROJETO EM <br></br> SEU <span>ESTILO DE VIDA</span></h1>
          <p>Para conquistar resultados e alcançar sua melhor versão, você precisa de consistência. Mas além disso, você precisa muito mais do que um treino padrão e engessado, que te fará desistir na primeira semana.</p>
          <p>Meu trabalho vai além disso. Não vou apenas te passar um treino específico para sua realidade e objetivos, vou trilhar esse caminho com você. Quero te mostrar como a atividade física pode recuperar sua confiança e ainda te trazer o corpo que tanto sonha. Um atendimento para quem está determinado a mudar, não existe plano b.</p>
          <div className='header-btns'>
              <a href='#' className='header-btn'>QUERO COMEÇAR AGORA</a>
          </div>
        </div>

        <div className='a-img'>
              <img src={foto} alt='foto'/>
            </div>
        </div>
      
      <div className='a-container' style={{marginTop: '100px', alignContent: 'right', flexDirection: 'row'}}>
          
            <div className='a-img'>
              <img src={squat} alt='squat'/>
            </div>
          
          
            <div style={{flexDirection: 'column'}}>
              <h1 style={{fontFamily: 'FutureTense', fontSize: '1.5rem'}}>QUAIS RESULTADOS EU POSSO <br></br> ESPERAR DOS TREINOS <span>TREINOS?</span></h1>
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

export default Mid
