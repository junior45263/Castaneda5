import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2';

function Logout() {
    
    const Logout=()=>{
        console.log("SESIÓN TERMINADA");   
        Swal.fire({
            icon: 'success',
            title: 'UTD',
            text: 'Sesion Cerrada Con Exito',
            footer: '<a href="www.utd.edu.mx"></a>'
          })   
        
      }  
    return (        
            <GoogleLogout
                clientId="928458794403-cia4r2p1knb2ln9870ukjs6j645gdh4p.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={Logout}
            />    
    )  
}/* //FIN DE LA FUNCION */

export default Logout;