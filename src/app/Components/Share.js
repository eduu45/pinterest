"use client"
import React, { useState } from "react";
import "../Styles/StylesShare.css";
import axios from "axios";
import { useRouter } from 'next/navigation'
const Share = () => {
    const navigation=useRouter()
    const [elements, setElements] = useState({ avatarimage: null ,notename:null});

    const onInputChange = (event) => {
        const selectedImage = event.target.files[0];
        setElements(x=>{return {...x,avatarimage: selectedImage}});

    }
    const handlesubmit=async()=>{
        const namev=sessionStorage.getItem("username")?sessionStorage.getItem("username"):"ana"
        const formData=new FormData()
        formData.append("username",namev)
        formData.append("namenote",elements.notename)
        formData.append("imagenPublication",elements.avatarimage)
        const res=  await  axios.patch("http://localhost:84/users/",formData)
         navigation.push("/body")
        console.log(res.data)
    }

    return (
        <div className="login-container">
            <div className="left-column">
                <div className="login-box" style={{ backgroundImage: `url(${elements.avatarimage ? URL.createObjectURL(elements.avatarimage) : 'https://images.mubicdn.net/static/images/avatar.png'})`, backgroundSize: 'cover' }}>
                    <label htmlFor='nuestroinput' className='circle'>
                        agregar foto
                        <input id='nuestroinput' accept='image/*' className='addfile' onChange={onInputChange} type='file' name="avatarimage" placeholder='elige un archivo'></input>
                    </label>
                    <div className="texto">Recomendamos usar archivos .jpg de alta calidad con un tamaño inferior a 20 MB</div>
                </div>
                <div className="add-title" id="fixed-elements">
                    <input type={"text"} name="name" onChange={(e)=>{
                        setElements(x=>{return {...x,notename: e.target.value}})

                    }} placeholder={"AGREGA UN TITULO"} />
                    <button className="custom-button"  onClick={handlesubmit}>Subir imagen</button>

                </div>
            </div>
        </div>
    );
}

export default Share;
