import React, { Fragment } from 'react';
import "./login.css";

const Login = () => {
    let localStorageData = localStorage.getItem('userData');
    localStorageData = JSON.parse(localStorageData);
    console.log(localStorageData)
    return (
        <Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2><small>Login</small></h2>
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
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