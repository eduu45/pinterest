
"use client"
import "/src/app/Styles/StylesRegistryn.css";
import avatar from '/public/images/logo.png'
import Image from "next/image";
import axios from "axios";
import {useState} from "react";
import '../Styles/StylesRegistryn.css'
import { useRouter } from 'next/navigation'

function Registro() {
    const navigation=useRouter()
    const hanleClick = () =>{
        router.push("/login");
    }


    const [loginform,setLoginForm]=useState({username:null,email:null,password:null})
    const handlesubmitregistro=async()=>{

    }
    const handelsubmit=async (e)=> {
        const res = await axios.post("http://localhost:84/users/", {
            name: loginform.username, email: loginform.email, password: loginform.password
        })
        console.log(res.data)
        if(res.data.success){
            navigation.replace("/login")
        }

        console.log(loginform.password)
    }
    const onInputChnage=(e)=>{

        const {name,value}=e.target
        setLoginForm(x=>{return {...x,[name]:value}})
    }
    return (
        <div className="body">
            <div class="form-structor">
                <div class="signup">
                    <div>
                        <Image className="avatar" src={avatar} />
                    </div>
                    <h2 class="form-title" id="signup"><span></span>REGISTRATE</h2>
                    <div   class="form-holder">
                        <input onChange={onInputChnage} type="text" class="input" name="username" placeholder="Name" />
                        <input  onChange={onInputChnage} type="email" class="input2" name="email" placeholder="Email" />
                        <input  onChange={onInputChnage}type="password" class="input3" name="password" placeholder="Password" />
                    </div>
                     <a className="submit-btn" onClick={handelsubmit}>Inicar </a>
                </div>
                <div class="login slide-up">
                    <div class="center">

                        <div class="form-holder">
                            <input type="email" class="input" placeholder="Email" />
                            <input type="password" class="input" placeholder="Password" />
                        </div>
                        <button class="submit-btn">inicia</button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Registro;