import React from 'react'
import "../../src/Css/jogoEmDestaque.css"
import gta from "../../src/img/GTA 5.png"
import gtaOnline from "../../src/img/GTA online.png"
import redDead from "../../src/img/RED.png"
import readOnline from "../../src/img/RED Online.png"

type Props = {}

const JogoEmDestaque = (props: Props) => {
  return (
    <div className='jogosEmDestaque'>
            <h1 className="tituloPrinciapl">Jogos em Destaque</h1>

            <div className="flexbox">

              <div className="divConteudo">
                <img src={gta} alt="" />
              </div>

              <div className="divConteudo">
                <img src={gtaOnline} alt="" />
              </div>

              <div className="divConteudo">
                <img src={redDead} alt="" />
              </div>

              <div className="divConteudo">
                <img src={readOnline} alt="" />
              </div>

            </div>

            <button className='verTodosOsJogos'>Ver todos os jogos</button>
    </div>
  )
}

export default JogoEmDestaque