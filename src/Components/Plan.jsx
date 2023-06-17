import React from 'react'


const Plan = () => {
  return (
    <div id="plan">
      <div className='plan-content  p-32 text-center'>
        <h1>PLANO DE TREINO <span className='text-[#DAED33]'>100%</span> INDIVIDUAL E <span className='text-[#DAED33]'>PERSONALIZADO</span> PARA VOCÊ</h1>
      </div>
        
        <div className='plan-offer flex flex-row  m-10 md:space-x-5'>
                <div className='plan-card py-10'>
                        <h2>PROJETO MENSAL</h2>
                        <ul className='p-10 space-y-2'>
                            <li className='p-2 border-b-2 border-[#000] '>Ideal para conhecer a metodologia <br></br> Kaique Lopes</li>
                            <li className='p-2 border-b-2 border-[#000] '>Treino Personalizado</li>
                            <li className='p-2 border-b-2 border-[#000] '>Acompanhamento via Whatsapp</li>
                        </ul>

                        <p className='p-10 text-center text-xl'>De R$310,00 por apenas: <br></br>
                        <span>R$ 279,00</span> <br></br> 10% de desconto</p>
                
                    <div className='header-btns m-5'>
                        <a href='#' className='header-btn3' >QUERO COMEÇAR</a>
                    </div>
                </div>

                <div className='plan-card py-10'>
                        <h2>PROJETO MENSAL</h2>
                        <ul className='p-10'>
                            <li className='p-2 border-b-2 border-[#000] '>Ideal para conhecer a metodologia <br></br> Kaique Lopes</li>
                            <li className='p-2 border-b-2 border-[#000] '>Treino Personalizado</li>
                            <li className='p-2 border-b-2 border-[#000] '>Acompanhamento via Whatsapp</li>
                        </ul>

                        <p className='p-10 text-center text-xl'>De R$620,00 por apenas: <br></br> 
                        <span>R$ 527,00</span> <br></br> 10% de desconto</p>
                
                    <div className='header-btns m-5'>
                        <a href='#' className='header-btn3' >QUERO COMEÇAR</a>
                    </div>
                </div>

                <div className='plan-card py-10'>
                        <h2>PROJETO MENSAL</h2>
                        <ul className='p-10'>
                            <li className='p-2 border-b-2 border-[#000] '>Ideal para conhecer a metodologia <br></br> Kaique Lopes</li>
                            <li className='p-2 border-b-2 border-[#000] '>Treino Personalizado</li>
                            <li className='p-2 border-b-2 border-[#000] '>Acompanhamento via Whatsapp</li>
                        </ul>

                        <p className='p-10 text-center text-xl'>De R$1674,00 por apenas: <br></br>
                        <span className='text-4xl'>R$ 1297,00</span> <br></br> 10% de desconto</p>
                
                    <div className='header-btns m-5'>
                        <a href='#' className='header-btn3' >QUERO COMEÇAR</a>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Plan
