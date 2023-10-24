import "@/estilos/registro.css"
import avatar from '../img/logo.png'
import Image from "next/image";


function Registro() {
  return (
    <div className="body">
<div class="form-structor">
	<div class="signup">
		<div>
			<Image className="avatar" src={avatar} />
        </div>
		<h2 class="form-title" id="signup"><span></span>REGISTRATE</h2>
		<div class="form-holder">
			<input type="text" class="input" placeholder="Name" />
			<input type="email" class="input" placeholder="Email" />
			<input type="password" class="input" placeholder="Password" />
		</div>
		<button class="submit-btn">iniciar</button>
	</div>
	<div class="login slide-up">
		<div class="center">
			<h2 class="form-title" id="login"><span>o</span>LOGIN</h2>
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