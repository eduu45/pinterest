"use client"
import React, { useState } from "react";
import "../Styles/StylesShare.css";
import axios from "axios";

const Share = () => {
    const [elements, setElements] = useState({ avatarimage: null });

    const onInputChange = (event) => {
        const selectedImage = event.target.files[0];
        setElements({ avatarimage: selectedImage });
    }

    return (
        <div className="login-container">
            <div className="left-column">
                <div className="login-box" style={{ backgroundImage: `url(${elements.avatarimage ? URL.createObjectURL(elements.avatarimage) : 'https://images.mubicdn.net/static/images/avatar.png'})`, backgroundSize: 'cover' }}>
                    <label htmlFor='nuestroinput' className='circle'>
                        subir
                        <input id='nuestroinput' accept='image/*' className='addfile' onChange={onInputChange} type='file' name="avatarimage" placeholder='elige un archivo'></input>
                    </label>
                    <div className="texto">Recomendamos usar archivos .jpg de alta calidad con un tamaño inferior a 20 MB</div>
                </div>
                <div className="add-title" id="fixed-elements">
                    <input type={"text"} placeholder={"AGREGA UN TITULO"} />
                    <button className="custom-button">Agregar foto</button>
                </div>
            </div>
        </div>
    );
}

export default Share;
