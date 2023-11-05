import React, { useState }from "react";
import { getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
import { app } from "../config/firebase";
import { Link } from "react-router-dom";
import '../styles/LoginSignup.css'



const auth = getAuth(app)

const SignupPage = () => {

const [username, setUsername] = useState(''); 
    const [email , setEamil]= useState("");
    const [password, setPassword]= useState("");

    const createUser = () => {
        createUserWithEmailAndPassword (auth , email, password).then(value => alert("Success"));

    }
    return (

        <div  className=" signup-page flex flex-col items-center mt-8 container"> 
      <h2 className="text-2xl font-bold mb-4 text">Registration</h2>
      <h3 className='italic'>Welcome to floral shop.</h3>
        <input
        className="border p-2 mb-2 rounded w-64 input"
         type="text" required placeholder="Username"/>
        
        <input
        
        className="border p-2 mb-2 rounded w-64 input"
         onChange={e => setEamil (e.target.value)} value={email} type="email" required placeholder="Email" />
        
        <input
        className="border p-2 mb-2 rounded w-64 input"
         onChange={e => setPassword (e.target.value)} value={password}  type="password" required placeholder="Password" />
        <button 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 submit"
        onClick={createUser}>Sign Up</button>
         
      <Link to="/login" className='link'>Already have an account? Login here.</Link>
        </div> 
    );
};

export default SignupPage;