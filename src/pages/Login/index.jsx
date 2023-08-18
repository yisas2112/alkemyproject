import React, { useState } from 'react';
import './index.scss';
import Logo from '../../components/Logo';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const hadleLogin = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target)
    setUsername(data.get('email'))
    setPassword(data.get('password'))
  
  }
  return <>
          <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <Logo height={'3.5rem'} width={'3.5rem'}></Logo>
              </div>
              <form onSubmit={hadleLogin}>
                <input type="text" id="login" className="fadeIn second" name="email" placeholder="login"/>
                <input type="text" id="password" className="fadeIn third" name="password" placeholder="password"/>
                <input type="submit" className="fadeIn fourth"  value="Log In"/>
              </form>
              <div id="formFooter">
                <a children="underlineHover"  href="#">Forgot Password?</a>
              </div>
            </div>
          </div>
        </>  
}

export default Login
