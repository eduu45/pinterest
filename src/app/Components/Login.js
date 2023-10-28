"use client"

import React, {useState} from "react";
import '../Styles/StylesLogin.css'
import {useRouter} from "next/navigation";
import Image from "next/image";
import avatar from "../../../public/images/logo.png";
import Body from "@/app/Components/Body";
import axios from "axios";

const Login = () => {
    const navigation=useRouter()
   const [elements,setElements]=useState({email:null,password:null})
    const onInputChange=async (e)=>{
       const {name,value}=e.target
        setElements(x=>{
            return{
                ...x,
            [name]:value,
            }
        })
      console.log(elements.email+elements.password)
    }
    const handleSubmit=async (e)=>{
        const res=await axios.post("http://localhost:84/users/login",{
            email:elements.email,password:elements.password
        })
        if(res.data?.datuser){
            console.log(res.data.datuser)
           navigation.replace("/body")
            sessionStorage.setItem("username",res.data.datuser.data)

        }else {
            alert("no existe")
        }
    }
    return(
        <div className="body">
            <div className="form-structor">
                <div className="signup">
                    <div>
                        <Image className="avatar" src={avatar} />
                    </div>
                    <h2 className="form-title" id="signup"><span></span>Login</h2>
                    <div   className="form-holder">
                        <input type="text" className="input" onChange={onInputChange} name="email" placeholder="Username" />
                        <input  type="password" className="input2" onChange={onInputChange} name="password" placeholder="Password" />
                    </div>
                    <a className="submit-btn" onClick={handleSubmit}>Iniciar </a>
                    
                </div>
              
            </div>
        </div>
)
}

export default Login;