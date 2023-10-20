import React from "react";
import "/src/Styles/StylesShare.css";

const Login = () =>{
    return(
        <div className="login-container">
            <div className="left-column">
                <div className="login-box">
                    <button className="custom-button">Agregar foto</button>
                    <div className="texto">Recomendamos usar archivos .jpg de
                        alta calidad con un tamaño inferior a 20 MB</div>
                </div>
                <div className="add-title" id="fixed-elements">
                    <input type={"text"} placeholder={"AGREGA UN TITULO"} />
                    <button className="save-button">Subir foto</button>
                </div>
            </div>
        </div>
    )
}

export default Login;