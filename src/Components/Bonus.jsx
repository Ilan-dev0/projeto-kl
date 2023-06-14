import React from 'react'
import treino1 from '../images/treino1.png'

const Bonus = () => {
  return (
    <div id='bonus'>

      <div className='random-content p-10 flex justify-center text-center'>
        <div className='border-t-4 border-b-4 border-[#DAED33] max-w-[300px] self-center '>
            <h1 className='text-white text-3xl'>BÔNUS <br></br> ESPECIAIS</h1>
        </div>
      </div>

      <div className='bonus-content ' >

          <div className='bonus-card1'>
          
              <div class='card1-img'>
                <div className='bagulho-verde'>
                  <h1>Cárdio e Abdômen</h1>
                </div>
                <div className='card-filter'>
                  <p><span>Treino bônus</span> focado em <span>definição de abdômen</span> e <span>fortalecimento cardiorrespiratório.</span></p>
                </div>
              </div>
              
          </div>

        <div className='bonus-card2'>
          <div class='card2-img'>
            <div className='bagulho-verde'>
              <h1>Projeto Treinos em Casa</h1>
            </div>
            <div className='card-filter'>
              <p>Viajou e não tem academia próximo ou para aqueles dias que ficou impossível encaixar a ida até a academia. Preparei uma planilha completa dividida por grupos musculares, para você treinar em qualquer lugar e a qualquer hora.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Bonus
