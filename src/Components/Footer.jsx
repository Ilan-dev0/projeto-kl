import React from 'react'
import logo from '../images/logopreta.png'
import telefone from '../images/telefone.png'
import zap from '../images/zap.png'
import insta from '../images/insta.png'
import mail from '../images/mail.png'

const Footer = () => {
  return (
    <div id='footer'>
      <div className='border-b-2 border-black  grid md:grid-cols-2 max-w-[1000px] m-auto p-10 text-center justify-between items-center'>
        
            <div className='py-5 text-center items-center '>
              <h1 className='flex px-4 py-2 items-center text-black text-2xl font-bold text-center'>FALE CONOSCO</h1>
              <p className='text-zinc-900 text-xs md:text-xl py-2  text-start md:ml-4'> <img src={telefone} alt='phone' />11 98209 6911 / 11 99549-1069</p>
              <p className='text-zinc-900 text-xs md:text-xl py-2  text-start md:ml-4'> <img src={zap} alt='whatsappp' /> 94784-4066 / 94709-0583</p>
              <p className='text-zinc-900 text-xs md:text-xl py-2  text-start md:ml-4'> <img src={insta} alt='instagram' /> @eukaiquelopes</p>
            </div>
            <div className='py-5 text-center items-center '>
              <h1 className='flex px-4 py-2 items-center text-black text-2xl font-bold text-center'>INFORMAÇÕES DO SERVIÇO</h1>
              <p className='text-zinc-900 text-xs md:text-xl py-2  text-start md:ml-4'>ATENDIMENTO DE:</p>
              <p className='text-zinc-900 text-xs md:text-xl py-2  text-start md:ml-4'>SEGUNDA Á SEXTA-FEIRA, DAS 8H ÁS 18HS.</p>
              <p className='text-zinc-900 text-xs md:text-xl py-2  text-start md:ml-4'>SINTA-SE A VONTADE PARA ENTRAR EM CONTATO PARA QUALQUER PROJETO, NÓS TEREMOS O PRAZER EM ESCLARECER DÚVIDAS.</p>
            </div>
        </div>    

            <div className=' flex flex-col items-center justify-center p-10'>
                <img className='w-[220px] h-[100px] ' src={logo} alt='logo' />
                <p className='text-zinc-900 text-xl py-2  text-start  mt-4'>DESENVOLVIDO POR: ILAN COSTA</p>
            </div>
    </div>
  )
}

export default Footer
