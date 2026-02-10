import React from 'react'
import HomeJogoPrincipal from "../Ui/homeJogoPrincipal.jsx"
import JogoEmDestaque from "../Ui/JogoEmDestaque.jsx"
import UltimasNoticias from "../Ui/UltimasNoticias.jsx"

import Footer from "../components/Footer.jsx"
const Home = () => {
  return (
    <div>

      <HomeJogoPrincipal />

      <JogoEmDestaque />

      <UltimasNoticias />

      <Footer />
    </div>
  )
}

export default Home