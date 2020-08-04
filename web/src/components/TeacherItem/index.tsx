import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/59922096?s=460&u=15dc039579415bf83737bf301a64569d13267cbe&v=4" alt="Fhelipe Rodrigues"/>
                        <div>
                            <strong>Fhelipe Rodrigues</strong>
                            <span>Química</span>
                        </div>
                    </header>
                        <p>
                            Entusiasta das melhores tecnologias de química avançada.
                            <br /><br />
                            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                        </p>

                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$ 80, 00</strong>
                            </p>
                            <button type="button">
                                <img src={whatsappIcon} alt="whatsapp"/>
                                Entrar em contato
                            </button>
                        </footer>
                    
                </article>
    );
}

export default TeacherItem;