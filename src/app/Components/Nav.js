"use client"
import React from "react";
import '../Styles/StylesNav.css'
import  {useRouter} from "next/navigation";



function Nav(){
    const router = useRouter()
     const hanleClick = () =>{
        router.push("/share");
     }
    return(
        <>
        <nav className="navbar">
            <div className="titulo">
                <img src="/Images/logopinterest.png" alt="" className="logo"/>
            </div>

            <div className="perfil-container">
                <img className="foto-perfil" src="/images/usuario.png" alt=""/>
            </div>

            <ul className="list">
                <li>
                        <a>Home</a>
                </li>
                <li>

                    <a href="/share">Share</a>
                </li>
            </ul>
        </nav>
            </>
    );
};
export default Nav;

