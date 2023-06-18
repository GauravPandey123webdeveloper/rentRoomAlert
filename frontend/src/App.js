






import React from 'react'
import HomePage from './Pages/HomePage'
import Signin from './Components/SignIn';

function App
() {
  return (
    <div>
        
      <HomePage/>
      
    </div>
  )
}

export default App;


















// import './App.css';
// import {useState} from 'react';

// function App() {
//   const [form,setForm]=useState({})
//   const handleForm=(e)=>{
//     console.log(e.target.value,e.target.name)
//     setForm({
//       ...form,
//       [e.target.name]:e.target.value
//     })
//   }
//   const handleSubmit= async (e)=>{
//     e.preventDefault();
//    const response= await fetch("http://localhost:8080/demo",{
//      method:'POST',
//      body:JSON.stringify(form),
//      headers:{
//       'Content-Type':'application/json'
//      }
//     })
//     const data=await response.text()
//     document.getElementById("getUser").innerHTML=data
//   }
//   return (
//     <div>
//       <p>{JSON.stringify(form)}</p>
//       <p id="getUser"></p>
//       <form onSubmit={handleSubmit}>
//         <h1>Create Authors Record</h1>
//       <span>Author name:</span>
//       <input type="text" name="authorName" onChange={handleForm}></input> <br/>
//       <span>Book Name</span>
//       <input type="text" name="bookName" onChange={handleForm}></input><br/>
//       <span>BookId</span>
//       <input type="text" name="bookId" onChange={handleForm}></input><br/>
//       <span>authorId</span>
//       <input type="text" name="authorId" onChange={handleForm}></input><br/>
//       <span>Description</span>
//       <input type="text" name="description" onChange={handleForm}></input><br/>
//       <input type="submit"></input>
//      </form>
//     </div>
//   );
// }

// export default App;
