import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { FcHome } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [confirmName, setconfirmName] = useState('');
  const [email, setEmail] = useState('');
  const [mobNum, setMobNum] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();


  function handleCreateAccount() {
    navigate('/Signin')
  }



  const handleSignUp = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo", {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.text()
    // document.getElementById("getUser").innerHTML = data
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    console.log(email)
    if (!emailPattern.test(email)) {
      alert('Invalid email address!');

    }

    if (!passwordPattern.test(password)) {
      alert('Invalid Password!');
    }

    if (JSON.parse(localStorage.getItem('data')) === null) {

      const dataArray = [{
        confirmName: confirmName,
        email: email,
        password: password,
      }]

      localStorage.setItem('data', JSON.stringify(dataArray))
      navigate('/signin')
    }

    else {
      const data = JSON.parse(localStorage.getItem('data'));
      const answer = data.find((value) => {
        return value.email === email;
      })

      if (answer == null) {
        const dataArray = {
          confirmName: confirmName,
          email: email,
          password: password,
        }

        data.push(dataArray)

        localStorage.setItem('data', JSON.stringify(data))
        navigate('/signin')
      }
      else {
        alert('User already exists')
      }
    }
    setconfirmName('');
    setEmail('');
    setPassword('');
    setMobNum('');


    // const handleSubmit= async (e)=>{
    //       e.preventDefault();
    //      const response= await fetch("http://localhost:8080/demo",{
    //        method:'POST',
    //        body:JSON.stringify(form),
    //        headers:{
    //         'Content-Type':'application/json'
    //        }
    //       })
    //       const data=await response.text()
    //       document.getElementById("getUser").innerHTML=data
    //     }
  };




  return (
    <div className={styles.logoBox}>
      <div >
        <FcHome size={50} />

      </div>
      <h2 className="top-heading">Create your account</h2>

      <form onSubmit={handleSignUp}>

        <input
          type="Text"
          placeholder="Enter your Name"
          value={confirmName}
          name='userName'
          onChange={(e) => setconfirmName(e.target.value)}
          required
          className={styles.input}
        />
        <br />
        <input
          type="email"
          placeholder="Enter E-mail Id"
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <br />

        <input
          type="text"
          value={mobNum}
          placeholder="Enter Mobile Number"
          name='phoneNumber'
          onChange={(e) => setMobNum(e.target.value)}
          required
          className={styles.input}
        />
        <br />

        <input
          type="password"
          value={password}
          minlength="4"
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create your Password"
          required
          className={styles.input}
        />
        <br />
      </form>
      <button type="submit" className={styles.Nextbutton} onClick={handleCreateAccount} ><h4>Next</h4></button>

    </div>
  );
};

export default SignUp;