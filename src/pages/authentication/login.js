import React, { Fragment, useState, useContext } from 'react';
import "./login.css";
import ToastContext from '../../Context/toastContext';

const Login = (props) => {
    let localStorageData = localStorage.getItem('userData');
    localStorageData = JSON.parse(localStorageData);
  
  //  console.log(localStorageData)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setMessage } = useContext(ToastContext)

    const validateForm = () => {
        let valid = true;
        if (email==='') {
            valid = false
            setMessage("Enter Email Address")
        } else if (password==='') {
            valid = false
            setMessage("Enter Password")
        } 
        return valid;
    };

    const doLogin = (e) =>{e.preventDefault()
        const validForm = validateForm()
        if(validForm){
           // console.log("found")
            var emailFound = localStorageData.find(o => o.email === email);
            var passwordFound = localStorageData.find(o => o.password === password);
            
            if(emailFound && passwordFound){
                setMessage("Logged in successfully")
                localStorage.setItem('authenticated_email', JSON.stringify(email));
                localStorage.setItem('authenticated_password', JSON.stringify(password));
                props.history.replace("/")
            }else{
                setMessage("Logged in not successfully")
            }
        }
    };
    
    return (
        <Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2><small>Login</small></h2>
                    <form onSubmit={doLogin}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                        />
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                        />
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login