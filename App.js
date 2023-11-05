import logo from './logo.svg';
import {getAuth } from "firebase/auth";
import './App.css';
import Layout from './components/Layout/Layout';
import Routes from './Routes/router'

// import SignupPage from './pages/Signup';
// import SigninPage from './pages/Signin';
// import { Router , Route ,  Routes } from 'react-router-dom';
import { app } from './config/firebase';


const auth = getAuth(app);

function App() {




  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<SigninPage/>}/>
    //     <Route path='/signin' element={<SignupPage />}/>
    //     {/* <Layout/> */}
        
    //   </Routes>
    // </Router>
  // <SignupPage/>
  <Routes/>

  // <SigninPage/>
  
 
  );
}

export default App;
