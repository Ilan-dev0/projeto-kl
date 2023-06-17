import React from 'react'
import { useEffect, useRef, useState,} from 'react' 
import { motion } from 'framer-motion'
import resultado1 from '../images/resultado1.png'
import resultado2 from '../images/resultado2.png'
import resultado3 from '../images/resultado3.png'

const resultados = [resultado1, resultado2, resultado3]


const Results = () => {

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

  return (
    <div id='results' className=' w-full m-0-auto   flex-column  align-center justify-center '>
      <div className='results-content p-10 justify-center text-center'>
        <h1 className='text-white text-3xl'>RESULTADOS REAIS</h1>
        <h2 className='text-white text-xl'>TIME KAIQUE LOPES</h2>
      </div>

      <div className='w-full m-0-auto  flex  align-center justify-center bg-zinc-900 pt-10'>
        <motion.div ref={carousel} className='cursor-grab overflow-hidden max-w-[1200px]' whileTap={{cursor: "grabbing"}}>
            <motion.div 
            className='flex'
            drag="x"
            dragConstraints={{ right:0, left: -width}}
            initial={{ x: 100 }}
            animate={{ x:0 }}
            trasition={{ duration: 0.8 }}
            >
                {resultados.map(resultado =>(
                    <motion.div className='min-h-[100px] min-w-[340px]  sm:min-w-[400px] p-[14px]' key={resultado}>
                        <div className=' bg-[#DAED33] w-[100%] h-[350px] rounded-xl'>
                        <img className='w-[100%] h-[300px] rounded-tl-lg rounded-tr-lg pointer-events-none ' src={resultado} alt='Texto alt' />
                          <div className='flex justify-between p-3 pl-10 pr-10'>
                            <h1 className='text-xl font-bold'>Antes</h1>
                            <h1 className='text-xl font-bold'>Depois</h1>
                          </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>

        
        </div>

              <div className='header-btns m-10'>
                <a href='#' className='header-btn' >ENTRAR PARA O TIME AGORA</a>
              </div>
    </div>
  )
}

export default Results
