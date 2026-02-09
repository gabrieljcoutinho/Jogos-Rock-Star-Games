import React from 'react'
import "../Css/Header.css"

import logoHeader from "../../src/img/Logo.png"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <img src={logoHeader} alt="" />
      <ul>
      <li>Jogos</li>
      <li>Loja</li>
      <li>Ajuda</li>
      </ul>
      </div>
  )
}

export default Header