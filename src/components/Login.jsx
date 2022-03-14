import React, { useState } from 'react';
import '../style/Login.css'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from "../firebase";


const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                history("/", { replace: true });
            })
            .catch(error => alert(error.message))
    }
    const signChange =(e)=>{
        e.preventDefault();
        document.getElementById('login').style.display = 'none'
        document.getElementById('signup').style.display = 'flex'
    }
    const loginChange =(e)=>{
        e.preventDefault();
        document.getElementById('login').style.display = 'flex'
        document.getElementById('signup').style.display = 'none'
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,email, password)
            .then((auth) => {
                if (auth) {
                    history("/", { replace: true });
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <>
        <div className='login' id='login' >
            <Link to='/'>
                <img
                    className="logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='logo'
                />
            </Link>

            <div className='logContainer'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit'  onClick={signIn} className='signInButton'>Sign In</button>
                </form>


                <button onClick={signChange} className='registerButton'>Create your Amazon Account</button>
            </div>
        </div>
        <div className='signup' id='signup'>
            <Link to='/'>
                <img
                    className="logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='logo'
                />
            </Link>

            <div className='logContainer'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit'  onClick={register} className='signInButton'>Register</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={loginChange} className='registerButton'>Already Have an account?</button>
            </div>
        </div>
        </>
    )
}

export default Login