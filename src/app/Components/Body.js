"use client"
import React, {useEffect, useState} from "react";
import '/src/app/Styles/StylesBody.css'
import axios from "axios";

const Body = () =>{
    const [elements,setElements]=useState({publications:[],publicationbod:null})
    useEffect(()=>{
        const namev=sessionStorage.getItem("username")?sessionStorage.getItem("username"):"ana"
         axios.get(`http://localhost:84/users/?username=${namev}`).then((res)=>{
             setElements(x=>{return{...x,publications: res.data.data}})
             console.log(res.data.data)
         })
    },[])

    return(
        <div className="cuerpo">
            <div className="Bienvenida">
                <div className="Bienvenida-usuarios">Bienvenido a tu feed</div>
            </div>
            <div className="container" >
                {elements.publications.map(x=><div className="card">
                    <div className="nombre">Karen</div>
                    <div className="user">
                        <img src="/Images/usuario.png" alt="" className="user-image"/>
                    </div>
                    <img src={x.imagenpublication} alt=""/>
                    <div className="title">{x.namenote}</div>
                </div>)
                }
            </div>
        </div>
    )}

export default Body;