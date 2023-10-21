import React from "react";
import '/src/app/Styles/StylesBody.css'

const Body = () =>{
    return(
        <div className="cuerpo">
            <div className="Bienvenida">
                <div className="Bienvenida-usuarios">Bienvenido a tu feed</div>
            </div>
            <div className="container" >
                <div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src="/Images/pastel.jpeg" alt=""/>
                    <div className="title">Pastel De cumpleaños</div>
                </div>
                <div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src="/Images/pato.jpeg" alt=""/>
                    <div className="title">Pato</div>
                </div>
                <div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src="/Images/babyyoda.jpeg" alt=""/>
                    <div className="title">Baby yoda</div>
                </div>
                <div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src="/Images/guaguau.jpeg" alt=""/>
                    <div className="title">Cachorros lindos</div>
                </div>
            </div>
            <div className="container" >
                <div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src="/Images/ranita.jpeg" alt="" className="background-image"/>
                    <div className="title">Ranita</div>
                </div>
                <div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src="/Images/edificio.jpeg" alt=""/>
                    <div className="title">Asterik</div>
                </div>
                <div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src="/Images/pollo.jpeg" alt=""/>
                    <div className="title">Un pollo con un celular</div>
                </div>
                <div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src="/Images/fondopatitos.jpeg" alt=""/>
                    <div className="title">Fondosss</div>
                </div>
            </div>
        </div>
    )}

export default Body;