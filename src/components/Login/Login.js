import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/Frame.png'
import Image from '../../assets/Mask group.png'

const Login = () => {
    const [form, setForm] = React.useState({
        email: "",
        password: "",
      });
    
      const [toggleClass, setToggleClass] = useState(false);
      const [incorrect, setIncorrect] = useState(false)
    
      const [Email, setEmail] = useState(null);
      const [Password, setPassword] = useState(null);
      const [moveButton, setMoveButton] = useState(false)

      console.log(Email)
      
      const handleEmail = (e) => {
        setEmail(e.target.value);
        setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
      };
    
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
      };
    
      const annoyingSubmitButton = () => {

        // if(Email === '' && Password === '') {
        //   setIncorrect(false)
        //   setToggleClass(false);
        // }
    
        if (Email !== 'ravinder@gmail.com' || Password !== 'ravinder') {
          setToggleClass((prevState) => !prevState);
          setIncorrect(true)
          setMoveButton(true)
        }

        if(Email === 'ravinder@gmail.com' && Password === 'ravinder') {
          setToggleClass(false)
          setIncorrect(false)
          setMoveButton(false)

        }
      };

      const handleSubmit = (e) => {
        e.preventDefault()
        if(Email !== 'ravinder@gmail.com' || Password !== 'ravinder') {
          setMoveButton(true)
          setIncorrect(true)
          setToggleClass((prevState) => !prevState);
        }
      }

      const resetFileds = () => {
        setMoveButton(false)
        setIncorrect(false)
        setToggleClass(false)
      }

      // const validateEmail = (email) => {
      //   return String(email)
      //     .toLowerCase().trim() //Trim to ignore spaces after user email input
      //     .match(
      //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      //     );
      // };

  return (
    <div className="container">
        <div className="card">
            <div className="form">

                

                <div className="right-side">

                        <div className='logo'>
                            <img src={Logo} alt='logo' />
                        </div>

                        <div className="heading">
                            <h3>GOOD MORNING, JOHN</h3>
                            <p>We are glad to see you back. Enter your details in order to access your work portal.</p>
                        </div>
                         
                        <form onSubmit={handleSubmit}>
                            <div className="input-text">
                                <input 
                                    placeholder='Email' 
                                    // className={`input ${!Email ? "empty" : ""} ${
                                    //     !validateEmail(form.email) ? "wrong-input" : "correct-input"
                                    // }`} 
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={(e) => handleEmail(e)}
                                    onClick={resetFileds}
                                    required
                                />
                                
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="input-text">
                                <input 
                                    // className={`input ${
                                    //     form.password.length <= 6 ? "wrong-input" : "correct-input"
                                    //   } ${!Password ? "empty" : ""}`}
                                      type="password"
                                      name="password"
                                      value={form.password}
                                      onChange={(e) => handlePassword(e)}
                                      onClick={resetFileds}
                                      placeholder='Password'
                                      required  
                                />
                            </div>
                        
                            <div className="rem_pass">
                                <div className="remember">
                                    <span><i className="fa fa-check"></i></span>
                                    <p>Remember Me</p>
                                </div>
                                <a href="#forgot">Forgot your password?</a>
                            </div>
                            <div className="button"
                                style={{
                                    transform: `translateX(${
                                      toggleClass && moveButton && incorrect
                                        ? "42vh"
                                        : "0"
                                    }`,
                                    transition: "transform 190ms ease-in-out",
                                  }}
                            >
                                <button
                                    // className={`submit-button ${
                                    //     form.password.length >= 6 && validateEmail(form.email)
                                    //       ? "button-success"
                                    //       : ""
                                    //   }`}
                                    className={`${incorrect || moveButton ? 'incorrect' : 'success'}`}
                                    onMouseEnter={moveButton || incorrect || toggleClass  ? annoyingSubmitButton : null}
                                >{incorrect || moveButton ? 'Incorrect' : 'Login'}</button>
                            </div>
                        </form>
                        <div className="register">
                            <p>Don’t have an account? <a href="#signup"> Sign Up here</a></p>
                        </div>
                </div>

                <div className="left-side">
                    <img src={Image} alt='login banner' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login