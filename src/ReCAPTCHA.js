
import ReCAPTCHA from "react-google-recaptcha";



const onChange = () => {
  console.log('Hubo un cambio');
}
function Login() {
  <div className="recaptcha">
  <ReCAPTCHA
    sitekey="6LdYVJUlAAAAAPg8HFsKuytO6AxSWj1Pp0dCMsZZ"
    onChange={onChange}
  />
</div>

}
export default ReCAPTCHA;