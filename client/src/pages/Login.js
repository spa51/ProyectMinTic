import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, {  useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { GlobalContext } from '../components/ProductsProvider';
import '../styles/auth.css'
import { firebaseConfig } from "../helpers/firebase.config";
import { initializeApp } from "@firebase/app";
import Spinner from 'react-bootstrap/Spinner'
import '../styles/spinner.css'
const inistialState={
    error:null,
    loading:false,
}

const Login = () => {
    const [formValue,handleInputChange]=useForm();
    const [state,setState]=useState(inistialState);
    const [,updateContext]=useContext(GlobalContext);
    const handleLogin=(e)=>{
        e.preventDefault();
        const auth = getAuth();
            setState({
                ...state,
                error:null,
                loading:true,
            })
            signInWithEmailAndPassword(auth, formValue.email, formValue.password)
                .then((userCredential) => {
                    console.log("Estamos logueados con: ",userCredential.user)
                    const user = userCredential.user;
                    updateContext(prevState=>({
                        ...prevState,
                        user:user,
                    }))
                    setState({
                        ...state,
                        error:null,
                        loading:false,
                    })
                    
                })
                .catch((error) => {
                    setState({
                        ...state,
                        error:"Contraseña/mail incorrectos",
                        loading:false,
                    })
                });
    }

    if (state.loading){
        return(
            <div className="spinner_container">
                <Spinner
                    style={{display:"inline-block",
                        alignItems:"center"
                    }}
                    animation="border" 
                    role="status"
                    variant='primary'>
                    <span className="visually-hidden ">Loading...</span>
                </Spinner>
            </div>
        )
    }
    
    // createUserWithEmailAndPassword(auth,email,password)
    return (
        <div className="auth_form">
            <h3 className="auth__title">Login</h3>
            { state.error && 
                <div className="auth__alert-error">
                    {state.error}
                </div> 
            }
            
            <form  >
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                    value={formValue.email}
                                  
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="password"
                    name="password"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={formValue.password}
                /> 
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleLogin}
                >
                    Login    
                </button> 
                <hr/>
                <div className="auth__social-network">
                    <p>Login with social networks</p>
                </div>
                <div 
                    className="google-btn"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
                <Link 
                    to="/user/register"
                    className="link"
                    >
                        Create new account
                </Link>
                   
            </form>  
        </div> 
    );
};

export default Login;