import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/35441321?s=460&u=4cdc312fd83004db3dd803f972c844bda00e085e&v=4" alt="Pedro Pacheco"/>
            <div>
              <strong>Pedro Pacheco</strong>
              <span>Estatística</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de estatística avançada.
            <br /><br />
            Apaixonado por estatística, matemática e programação. To muito agarrado no momento fazendo esse rai de curso.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato.
            </button>
          </footer>
    </article>
  )
}

export default TeacherItem;