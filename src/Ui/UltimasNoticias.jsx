import React from 'react';
import "../../src/Css/ultimasNoticias.css";

// Importe as outras imagens aqui também
import gta from "../../src/img/GTA 6.png";
import img2 from "../../src/img/trailer.png"
import img3 from "../../src/img/gtaOnline.png"

type Props = {}

const UltimasNoticias = (props: Props) => {
  return (
    <div className='ultimasNoticiasConteudo'>
      <h3 className='ultimaNoticia'>Ultimas Noticias</h3>

      <div className="conteudo">
        {/* Imagem Principal (Esquerda) */}
        <div className="card gta-principal">
          <img src={gta} alt="GTA 6" className='img-grid' />
          
        </div>

        {/* Imagem Superior (Direita) */}
        <div className="card noticia-menor">
          <img src={img2} alt="Noticia 2" className='img-grid' />
        </div>

        {/* Imagem Inferior (Direita) */}
        <div className="card noticia-menor">
          <img src={img3} alt="Noticia 3" className='img-grid' />
        </div>
      </div>
    </div>
  );
}

export default UltimasNoticias;