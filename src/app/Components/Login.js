import React from "react";
import '../Styles/StylesLogin.css'
import {useRouter} from "next/navigation";
import Image from "next/image";
import avatar from "../../../public/images/logo.png";
import Body from "@/app/Components/Body";
const Login = () => {

    return(
        <div className="body">
            <div className="form-structor">
                <div className="signup">
                    <div>
                        <Image className="avatar" src={avatar} />
                    </div>
                    <h2 className="form-title" id="signup"><span></span>Login</h2>
                    <div   className="form-holder">
                        <input type="text" className="input" name="username" placeholder="Username" />
                        <input  type="password" className="input3" name="password" placeholder="Password" />
                    </div>
                    <a className="submit-btn" href="/body">Iniciar </a>
                </div>
                <div className="login slide-up">
                    <div className="center">

                        <div className="form-holder">
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button className="submit-btn">inicia</button>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Login;