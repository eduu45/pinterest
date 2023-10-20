import React from "react";
import '/src/Styles/StylesHead.css';
const Head = () =>{

    return(
        <div className="bar-container">
            <ul className="list">
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Crear</a></li>
            </ul>

            <div className="perfil-container">
                <img className="foto-perfil" src="/images/fotoperfil.jpeg" alt=""/>

            </div>
        </div>
    )
}

export default Head;