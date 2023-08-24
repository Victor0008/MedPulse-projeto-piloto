import imgPulse from './assets/ImgPulse.png'
import './styles.css'
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

return(
<div className="container">
  <div className="container-login">
    <div className="wrap-login">
      <form className="login-form">
      <span className="login-form-title">Atribuição de dados</span>
      <span className="login-form-title"><img src={imgPulse} alt =""/></span>
      
      <div className="wrap-input">
        <input className={email !== "" ? 'has-val input' : 'input'}  type="text"  value={email} onChange={e => setEmail(e.target.value)}/>
        <span className="focus-input" data-placeholder="Condição 1">

        </span>
      </div>

      <div className="wrap-input">
        <input className="input" 
        type="text" 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        />

        <span className="focus-input" placeholder="Condição 2">
          
        </span>
      </div>

      <div className="container-login-form-btn">
        <button className="login-form-btn">Adicionar dados</button>

      <div className="text-center">
        <span className="txt1">Os dados serão atriubuídos a seu perfil</span>
        <a className="txt2" href="sitedecriarconta.com">Não possuí conta?</a>
      </div>

      </div>
      </form>
    </div>
  </div>
</div>
  );
}

export default App;
