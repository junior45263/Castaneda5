import FacebookLogin from 'react-facebook-login';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

const onChange = () => {
  console.log('Hubo un cambio');
}

function Login_face() {
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    Swal.fire({
        icon: 'success',
        title: 'BIENVENIDO APP UTD',
      })
    
  
    
  }
  const responseFacebook2 = (respuesta_incorrecta) => {
    console.log(respuesta_incorrecta);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'LAS CREDENCIALES SON ERRONEAS',
      })
    
  
    
  }
  return (
    <div className='Login_face'>
      <center><br/><br/>
      <FacebookLogin
        appId="662540142298337"
        autoLoad={false}
        onFailure={responseFacebook2}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
        <div className="recaptcha">
        <ReCAPTCHA
          sitekey="6LdYVJUlAAAAAPg8HFsKuytO6AxSWj1Pp0dCMsZZ"
          onChange={onChange}
        />
      </div>
      </div>  
          
      );  
}

export default Login_face;