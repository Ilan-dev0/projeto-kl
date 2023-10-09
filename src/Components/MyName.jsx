import React from 'react'
import kaique from '../images/Kaique.png'

const MyName = () =>{

    return(
        <div id='name' className='my-name-backgroung'>
            <div className='my-name-container '>
                <div id='my-name'>
                    <div>
                        <img src={kaique} />
                    </div>
                    <div className='myname-text'>
                        <h1>
                            MEU NOME É <br/>KAIQUE LOPES
                        </h1>
                
                        <p>
                            Sou formado em <span style={{fontWeight:'bold'}}>Educação Física</span> e &nbsp;
                            <span style={{fontWeight:'bold'}}>Personal Trainer.</span> <br/><br/>

                            Acredito que <span style={{fontWeight:'bold'}}>resultados dizem mais que explicação</span>,&nbsp;
                            tenho orgulho das centenas de alunos que tive durante minha carreira.<br/><br/>

                            Sem dúvidas, o desafio com que eu mais trabalhei foi emagrecimento alinhado a&nbsp;
                            <span style={{fontWeight:'bold'}}>hipertrofia muscular.</span><br/><br/>

                            São <span style={{fontWeight:'bold'}}>muitos anos de experiência</span> &nbsp;
                            trabalhando com esse objetivo. Alunos de todas as <span style={{fontWeight:'bold'}}>idades</span>,&nbsp;
                            com <span style={{fontWeight:'bold'}}>histórias</span>, <span style={{fontWeight:'bold'}}>limitações</span>&nbsp;
                            e <span style={{fontWeight:'bold'}}>desafios</span> particulares.<br/><br/>
                        </p>
                    </div>
                </div>

                <div className='myname-footer'>
                    <div className='square'>
                        <p>
                            Meu objetivo maior é fazer com que o <span style={{fontWeight:'bold'}}>treino</span> e a <span style={{fontWeight:'bold'}}>disciplina</span> te ajudem a desenvolver
                            e melhorar outras áreas da sua vida, porque um <span style={{fontWeight:'bold'}}>corpo saudável</span> é a <span style={{fontWeight:'bold'}}>base de tudo</span>.
                        </p>
                    </div>
                    <div className='footer-text'>
                        <span>
                            Essa sem dúvida é a minha maior motivação. É o que me faz amar essa profissão. Eu amo ser Personal Trainer! Eu amo motivar!&nbsp;
                            Eu amo ajudar pessoas a terem resultados, se sentirem mais magras e mais apaixonadas por si mesmas! Foi para isso que eu vim&nbsp;
                            ao mundo, eu sei que essa é a minha missão.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyName