import React from 'react'
import "../Css/Header.css"

import logoHeader from "../../src/img/Logo.png"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <img src={logoHeader} alt="" />
      <ul className='ulListaHeader'>
      <li className='lista'>Jogos</li>
      <li className='lista'>Loja</li>
      <li className='lista'>Ajuda</li>
      </ul>
        <div className="movimentacao">
        <button className='btnDowload'>Baixar o Launcher</button>
        </div>
      </div>
  )
}

export default Header