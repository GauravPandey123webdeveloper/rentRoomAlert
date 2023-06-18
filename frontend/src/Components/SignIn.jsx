import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Signin.module.css';
import { FcHome } from 'react-icons/fc';
import { FcGoogle } from 'react-icons/fc';



const Signin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }
    
    function handleHome(){
        navigate('/')
    }


    function handleClick() {
        navigate('/SignUp')
    }

    function handleSubmit(e) {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!emailPattern.test(email)) {
            alert('Invalid email address!');
        }

        if (!passwordPattern.test(password)) {
            alert('Invalid Password!');
        }

        if (JSON.parse(localStorage.getItem("data")) === null) {
            alert("No user found");
        }

        else {
            let data = JSON.parse(localStorage.getItem("data"))
            const answer = data.find((value) => {
                return value.email === email;
            })

            if (answer != null) {
                if (email === answer.email && password === answer.password) {
                    localStorage.setItem("loginName", JSON.stringify(answer))
                    navigate("/home")
                }
                else {
                    alert("Please enter the valid login credentials")
                }
            }
            else {
                alert("No user found")
            }
        }
    }

    function handleForgotPassword() {
        navigate('/verifyemail')
    }

    return (
        <>
            <div className={styles.logoBox}>
                <FcHome size={50} />
                <h2>Sign in to <a onClick={handleHome}>rentRoomAlert</a></h2>
                <button >
                    <FcGoogle  className={styles.Gicon} />
                    <h4>Sign in with Google</h4>
                </button>
                <hr></hr>
                <span>Or</span>
                <br />
                <form onSubmit={handleSubmit} >
                    <label  >
                        <input type="text" value={email} onChange={handleEmail} className={styles.input} placeholder="Email" />
                    </label>
                    <br />
                    <br />
                    <label>
                        <input type="password" value={password} onChange={handlePassword} className={styles.input} placeholder="Password" />
                    </label>
                    <br />
                    <button type="submit"><h4>Log In</h4></button>
                </form>
                <button onClick={handleForgotPassword}><h4>Forgot Password?</h4></button>
                <h4>Don't have an account?<a onClick={handleClick}>Sign up</a></h4>
            </div>
        </>
    )
}

export default Signin;