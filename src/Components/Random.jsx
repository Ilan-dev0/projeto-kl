import React from 'react'

const Random = () => {
  return (
    <div id='random'>
      <div className='random-content p-10 justify-center text-center'>
        <div className='border-t-4 border-b-4 max-w-[300px] self-center '>
            <h1 className='text-white text-2xl'>CHEGA DE TREINOS <br></br> ALEATÓRIOS</h1>
        </div>
      </div>

        <div className='m-5'> 
            <p className='text-[#F9F9F9] font-light text-xl leading-6 underline-offset-2	drop-shadow-2xl '>É extremamente 
            possível ter <span className='font-bold'>resultados em 60 dias</span>, 
            desde que você tenha o <br></br> <span className='font-bold'>mapa para o caminho</span>. De nada adianta ter uma boa alimentação, 
            seguindo <br></br> aquelas fichas padronizadas da academia. Eu vou <span className='font-bold'>trilhar o caminho ao seu <br></br> lado</span>, 
            de forma <span className='font-bold'>planejada</span> para que você tenha <span className='font-bold'>resultados expressivos em 60 <br></br> dias</span>. Treinos que você pode 
            realizar entre 45 a 60 minutos, adaptados a sua <br></br> disponibilidade de <span className='font-bold'>tempo</span> e <span className='font-bold'>capacidade física</span>.</p>
        </div>

              <div className='header-btns m-5'>
                <a href='#' className='header-btn2' style={{width: '400px'}}>É DISSO QUE EU PRECISO!</a>
              </div>
    </div>
  )
}

export default Random
