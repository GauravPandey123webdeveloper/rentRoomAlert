import React from 'react'
import styles from './CreateAccount.module.css';
import { useNavigate } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";






export default function CreateAccount() {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/Createaccount')
    }

    function getBackToSignin() {
        navigate('/signin')
    }

    return (
        <div>
            <div className={styles.main}>
                <FcHome size={50} />


                <h2 className={styles.heading2}>Join Us Today</h2>


                <div className={styles.btn}>
                    <button className={styles.googleButton}><FcGoogle size={23} /><h4>Sign up with Google</h4></button>

                    <button className={styles.appleButton}> <FaApple size={23} /><h4>Sign up with Apple</h4></button>
                    <h3 className={styles.heading - 3}>or</h3>
                    <button className={styles.accountButton} onClick={handleClick}><h4>Create account</h4></button>
                </div >

                <h4>By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use.</a></h4>
                <h3 className={styles.heading4}>Have an account already? <a onClick={getBackToSignin}>Log in</a></h3>
            </div>
        </div>
    )
}