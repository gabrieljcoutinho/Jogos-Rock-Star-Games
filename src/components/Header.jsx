import React from 'react'
import "../Css/Header.css"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header'>
      <ul>
      <li>Jogos</li>
      <li>Loja</li>
      <li>Ajuda</li>
      </ul>
      </div>
  )
}

export default Header