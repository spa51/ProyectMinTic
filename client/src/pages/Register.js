import React, { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from '@firebase/auth';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import '../styles/auth.css'
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../helpers/firebase.config';
const inistialState={
    error:null,
    loading:false,
}

const objeto={

        apiKey: "AIzaSyDVcssK1V7n4jndI1Ro1wTfUgEJUsbrQVg",
        authDomain: "misiontic-bb459.firebaseapp.com",
        databaseURL: "https://misiontic-bb459-default-rtdb.firebaseio.com",
        projectId: "misiontic-bb459",
        storageBucket: "misiontic-bb459.appspot.com",
        messagingSenderId: "809204228953",
        appId: "1:809204228953:web:93483ddc0bdb61031ba248",
        measurementId: "G-MZF7ZEGYSK"

}
const Register = () => {
    const app = initializeApp(objeto)
    const [registerStatus,setRegisterStatus]=useState(inistialState);
    const [formValue,handleInputChange]=useForm();
    const registerUser= async (e)=>{
        e.preventDefault();
        if(formValue.password!==formValue.password2||formValue.email===""||formValue.name==="") return
        const auth=getAuth(app);
        await createUserWithEmailAndPassword(auth,formValue.email,formValue.password)
        .then(userCredential=>{
            const user = userCredential.user;
            setRegisterStatus({
                ...registerStatus,
                error:null
            });
        })
        .catch(error => {

            setRegisterStatus({
                ...registerStatus,
                error:error.message,
            });
         });
    }
    console.log(process.env.REACT_APP_API_KEY)
    return (
        <div className="auth_form">
        <h3 className="auth__title">Register</h3>
        <div>

            { registerStatus.error && 
                <div className="auth__alert-error">
                    {registerStatus.error}
                </div> 
            }
            
            <input 
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleInputChange}
                    value={formValue.name||""}
                />
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                    value={formValue.email||""}
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={formValue.password||""}
                /> 
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={formValue.password2||""}
                /> 
                
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    onClick={registerUser}
                >
                    Register    
                </button> 
                
                <Link 
                    to="/user/login"
                    className="link"
                    >
                        Already Registered?
                </Link>
               
        </div>  
    </div> 
    );
};

export default Register;