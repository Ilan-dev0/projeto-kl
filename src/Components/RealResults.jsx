import React from "react";
import { motion } from 'framer-motion'
import { useEffect, useRef, useState,} from 'react' 

const RealResult = () =>{
    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

    }, [])

    return(
        <div id='real-results'>
            <div className="title-div">
                <h1>
                    Resultados Reais
                </h1>
            </div>
            <div className="carrousel w-full m-0-auto  flex  align-center justify-center bg-zinc-900 pt-10">

                <motion.div ref={carousel} className='cursor-grab overflow-hidden max-w-[1200px]' whileTap={{cursor: "grabbing"}}>
                    <motion.div 
                    className='flex'
                    drag="x"
                    dragConstraints={{ right:0, left: -width}}
                    initial={{ x: 100 }}
                    animate={{ x:0 }}
                    trasition={{ duration: 0.8 }}
                    >
                    <motion.div className="px-4">
                    <div className="carrousel-item pt-12">
                        <div className="square">
                            <div className="photo">
                                <img>
                                </img>
                            </div>
                            <div className="title">
                                <h1>
                                    LOREM IPSUM
                                </h1>
                                <p>
                                    Lorem Ipsum
                                </p>
                            </div>
                            <div className="text">
                                <p style={{textAlign:'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </p>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                    <motion.div className="px-4">
                    <div className="carrousel-item pt-12">
                        <div className="square">
                            <div className="photo">
                                <img>
                                </img>
                            </div>
                            <div className="title">
                                <h1>
                                    LOREM IPSUM
                                </h1>
                                <p>
                                    Lorem Ipsum
                                </p>
                            </div>
                            <div className="text">
                                <p style={{textAlign:'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </p>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                    <motion.div className="px-4">
                    <div className="carrousel-item pt-12">
                        <div className="square">
                            <div className="photo">
                                <img>
                                </img>
                            </div>
                            <div className="title">
                                <h1>
                                    LOREM IPSUM
                                </h1>
                                <p>
                                    Lorem Ipsum
                                </p>
                            </div>
                            <div className="text">
                                <p style={{textAlign:'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </p>
                            </div>
                        </div>
                    </div>
                    </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            
            <div className="footer">
                <div className="line"></div>
                <h1>
                    VOCÊ NÃO ESTARÁ SOZINHO!
                </h1>
                <div className='header-btns m-10'>
                <a href='#' className='header-btn' >QUERO FALAR COM O KAIQUE</a>
                </div>
            </div>
        </div>
    )
}

export default RealResult