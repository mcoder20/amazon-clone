import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

import './Login.css';

function Login() {

    // this is to programatically route to a different page
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // do the firebase login magic here
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log('user succesfully logged in : ', auth);
                history.push('/');
            })
            .catch(error => alert(error.message));
    }


    const register = e => {
        e.preventDefault();

        // do somme firebase register magic here
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log('user succesfully created : ', auth);
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://www.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" alt="" />
            </Link>
            <div className="login__formContainer">
                <h1>Sign-In</h1>
                <form className="login__form" action="" method="post">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} >Sign In</button>

                </form>

                <p>By continuing, you agree to Our FAKE Amazon's Conditions of Use and Privacy Notice</p>

                <button className="login__signupButton" type="submit" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
