import React , { useState } from "react";
import {getAuth ,signInWithEmailAndPassword} from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom"; 
import { app } from "../config/firebase";
import '../styles/LoginSignup.css'

import SignupPage from "./Signup";



const auth = getAuth(app);
const SigninPage = () => {

    const[email , setEamil] = useState ('');
    const[password , setPassword] = useState('');
    const Navigate= useNavigate ();


    const signinUser = () => {
        signInWithEmailAndPassword(auth, email , password)
        .then(value => 
            Navigate('/dashboard') ,
            console.log("Signin success")
        )

        .catch((err)=> console.log(err));

       
    }
    return (
        
        <div className="signin-page container">
            <h1 className="text">Signin</h1>
            <h3 className='italic'>Welcome to floral shop.</h3>
            
            <input
            className="inputs input"
            onChange={(e) => setEamil (e.target.value)}
            value={email}
             type="email" placeholder="Email" />
            
            <input 
            className="inputs input"
               onChange={(e) => setPassword (e.target.value)}
               value={password}
            type="password" placeholder="Password" />
        
        <button  className="submit" onClick={signinUser}>Signin</button>
        

        
          
        </div>
    );
};

export default SigninPage;