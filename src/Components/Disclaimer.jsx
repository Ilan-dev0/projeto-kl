import React from 'react'

const Disclaimer = () => {
  return (
    <div id="disclaimer">
      <div className='disclaimer-content p-10 justify-center text-center'>
            <h1 className='text-white text-2xl'>ENTENDA COMO FUNCIONA</h1>
            <h2 className='text-zinc-400 text-2xl'>60 DIAS DE PROJETO | 8 SEMANAS DE TRANSFORMAÇÃO | 4 NÍVEIS DE INTENSIDADE</h2>
      </div>

      <div className='disclaimer-shadow bg-[#DAED33]  rounded  shadow-xl p-5 m-4'>
        <h1 className='text-xl font-bold'>PASSO 01: <span className='text-xl font-normal'>Anamnese para diagnóstico inicial da sua realidade e dos seus objetivos</span></h1>
      </div>
      
      <div className='disclaimer-shadow bg-[#DAED33]  rounded  p-5 m-4'>
        <h1 className='text-xl font-bold'>PASSO 02: <span className='text-xl font-normal'>Chamada de vídeo individual para eu entender suas motivações e montar um plano de ação personalizado</span> </h1> 
      </div>

      <div className='disclaimer-shadow bg-[#DAED33]  rounded  p-5 m-4'>
        <h1 className='text-xl font-bold'>PASSO 03: <span className='text-xl font-normal'>Entrega do seu treino, totalmente individualizado, alinhado com seus objetivos e atualizado conforme seu progresso</span></h1>
      </div>

      <div className='disclaimer-shadow bg-[#DAED33]  rounded  p-5 m-4'>
        <h1 className='text-xl font-bold'>PASSO 04: <span className='text-xl font-normal'>Acompanhamento da sua evolução através de fotos mensais</span></h1>
      </div>
      
      <div className='disclaimer-shadow bg-[#DAED33]  rounded  p-5 m-4'>
        <h1 className='text-xl font-bold'>PASSO 05: <span className='text-xl font-normal'>Acompanhamento no whatsapp durante todo o processo para feedback e direcionamento</span></h1>
      </div>
    </div>
  )
}

export default Disclaimer
