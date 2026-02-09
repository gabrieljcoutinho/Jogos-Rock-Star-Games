import React from 'react'
import "../../src/Css/ultimasNoticias.css"

import gta from "../../src/img/GTA 6.png"

type Props = {}

const UltimasNoticias = (props: Props) => {
  return (
    <div className='ultimasNoticiasConteudo'>
        <h3 className='ultimaNoticia'>Ultimas Noticias</h3>

        <div className="conteudo">
                    <div className="gta">
                        <img src={gta} alt="" />
                    </div>
        </div>
    </div>
  )
}

export default UltimasNoticias