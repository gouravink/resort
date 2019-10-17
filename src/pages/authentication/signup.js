import React, { Fragment, useState, useContext } from 'react';
import ToastContext from '../../Context/toastContext'

const Signup = (props) => {
    ////////////////////////////////////////////////////////////////
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const { setMessage } = useContext(ToastContext);
    ////////////////////////////////////////////////////////////////
    const validateForm = () => {
        let valid = true;
        if (!fname.trim()) {
            valid = false;
            setMessage("Enter First Name")
        } else if (!lname.trim()) {
            valid = false;
            setMessage("Enter Last Name")
        } else if (!email.trim()) {
            valid = false;
            setMessage("Enter Email")
        } else if (!password.trim()) {
            valid = false;
            setMessage("Enter Password")
        } else if (confirmPassword.trim() && confirmPassword !== password) {
            valid = false;
            setMessage("Enter confirm Password")
        } else if (!phone.trim()) {
            valid = false;
            setMessage("Enter Phone Number")
        }
        return valid;
    };

    ////////////////////////////////////////////////////////////////
    const doSignup = (e) => {e.preventDefault()
        const validForm = validateForm();
        const signupData = {fname, lname, email, password, phone}
        //console.log("Signup data", signupData)
        if(validForm){
            let localStorageData = localStorage.getItem('userData');
           // console.log(localStorageData);
            if(localStorageData) {
                localStorageData = JSON.parse(localStorageData);
                localStorageData.push(signupData);
                localStorage.setItem('userData', JSON.stringify(localStorageData));
            } else {
                localStorage.setItem('userData', JSON.stringify([signupData]));
            }
            setMessage("Signup Successfully")
            props.history.replace("/login")
        }
    };
    ////////////////////////////////////////////////////////////////
    return (
        <Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2><small>Signup</small></h2>
                    <form  onSubmit = {doSignup}>
                        <input type="text" value={fname} id="fname" className="fadeIn second" name="fname" placeholder="First Name"
                            onChange={(e) => {
                                setMessage(false)
                                setFname(e.target.value)
                            }} />
                        <input type="text" value={lname} id="lname" className="fadeIn second" name="lname" placeholder="Last Name"
                            onChange={(e) => {
                                setMessage(false)
                                setLname(e.target.value)
                            }}
                        />
                        <input type="email" value={email} id="email" className="fadeIn second" name="email" placeholder="Email"
                            onChange={(e) => {
                                setMessage(false)
                                setEmail(e.target.value)
                            }}
                        />
                        <input type="password" value={password} id="password" className="fadeIn third" name="password" placeholder="password"
                            onChange={(e) => {
                                setMessage(false)
                                setPassword(e.target.value)
                            }}
                        />
                        <input type="password" value={confirmPassword} id="confirm_password" className="fadeIn third" name="confirm_password" placeholder="Confirm Password"
                            onChange={(e) => {
                                setMessage(false)
                                setConfirmPassword(e.target.value)
                            }}
                        />
                        <input type="phone" value={phone} id="phone" className="fadeIn second" name="phone" placeholder="phone Number"
                            onChange={(e) => {
                                setMessage(false)
                                setPhone(e.target.value)
                            }}
                        />
                        <input type="submit" className="fadeIn fourth" />
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup