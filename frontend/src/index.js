import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signin from './Components/SignIn';
import SignUp from './Components/SignUp';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateAccount from './Components/CreateAccount';

const router = createBrowserRouter([
  {
    path : "/",
    element: <App/>
  },
  {
    path : "/Signin",
    element: <Signin/>
  },
  {
    path: "/SignUp",
    element: <CreateAccount />,
  },
  {
    path: "/Createaccount",
    element: <SignUp />,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
